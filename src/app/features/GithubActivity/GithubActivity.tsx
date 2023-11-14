'use client';

import styles from './GithubActivity.module.css';
import {
	getRecentCommitsForUser,
	Commit,
	Contribution,
	getContributionsForUser,
} from '@/app/utils/oktokit-wrappers';
import { LoadingWheel } from '@/app/components/LoadingWheel';
import { useQuery } from 'react-query';
import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

export function GithubActivity() {
	const username = 'dpatton1992';

	const { isLoading, isError, data, error } = useQuery('contributions', () =>
		getContributionsForUser(username)
	);

	return (
		<>
			<h2>Github Activity</h2>
			{isLoading ? (
				<LoadingWheel height="400px" width="1000px" />
			) : isError ? (
				'there was an error'
			) : data ? (
				// I could cast data as Contribution[] here, but this adds some
				// fault tolerance by returning an empty array if data is nullish
				<>
					<ContributionGraph contributions={data} />
					<ActivityOverview contributions={data} />
				</>
			) : (
				''
			)}
			<RecentCommits username={username} />
		</>
	);
}

function RecentCommits(props: { username: string }) {
	const { username } = props;
	// const [commits, setCommits] = useState(null as any as Commit[]);
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(null);

	// useEffect(() => {
	// // 	setIsLoading(true);

	// // 	getRecentCommitsForUser(username)
	// // 		.then((res) => {
	// // 			setCommits(res);
	// // 			setIsLoading(false);
	// // 		})
	// // 		.catch((err) => {
	// // 			setError(err);
	// // 		});
	// // }, []);

	const { isLoading, isError, data, error } = useQuery('commits', () =>
		getRecentCommitsForUser(username)
	);

	return (
		<div>
			{isLoading ? (
				<LoadingWheel height="400px" width="1000px" />
			) : isError ? (
				'Error: unable to fetch commits'
			) : (
				<div className={styles.commitContainer}>
					{data?.map((commit) => (
						<div key={commit.sha}>
							<a
								href={commit.url}
								target="_blank"
								rel="noreferrer"
								className={styles.commitLink}
							>
								{/* <div>{{commit.message.length >= 70
									? commit.message.slice(0, 70) + '...'
									: commit.message}</div> - <div>{commit.sha.slice(-7)}</div> */}
								{commit.repo}
								<div className={styles.commitMessage}>{commit.message}</div>
								{commit.sha.slice(-7)}
							</a>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

function ContributionGraph(props: { contributions: Contribution[] }) {
	const { contributions } = props;

	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!svgRef.current) return;

		const svg = d3.select(svgRef.current);

		const svgWidth = 600;
		const svgHeight = 300;

		// Extract unique dates from contributions
		const uniqueDates = Array.from(new Set(contributions.map((d) => d.date)));

		// Count contributions for each unique date
		const contributionsCount = contributions.reduce((acc, contribution) => {
			const date = contribution.date;
			acc[date] = (acc[date] || 0) + 1;
			return acc;
		}, {} as Record<string, number>);

		const xScale = d3
			.scaleBand()
			.domain(uniqueDates)
			.range([0, svgWidth])
			.padding(0.1);

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(Object.values(contributionsCount)) || 0])
			.range([svgHeight, 0]);

		// Create bars
		svg
			.selectAll('rect')
			.data(contributions)
			.enter()
			.append('rect')
			.attr('x', (d) => xScale(d.date) || 0)
			.attr('y', (d) => yScale(d.payload.size || 0) || 0)
			.attr('width', xScale.bandwidth())
			.attr('height', (d) => svgHeight - (yScale(d.payload.size || 0) || 0))
			.attr('fill', 'steelblue');

		// Add axes
		const xAxis = d3.axisBottom(xScale);
		svg.append('g').attr('transform', `translate(0, ${svgHeight})`).call(xAxis);

		const yAxis = d3.axisLeft(yScale);
		svg.append('g').call(yAxis);
	}, [contributions, svgRef]);

	return (
		<svg ref={svgRef} width="600" height="300">
			{/* SVG content will be rendered here */}
		</svg>
	);
}

function ActivityOverview(props: { contributions: Contribution[] }) {
	const { contributions } = props;
	return (
		<>
			<div>
				{contributions?.map((contribution) => (
					<div key={contribution.date}>
						{contribution.date} - {contribution.type} -{' '}
						{contribution.payload?.ref}
						{contribution.payload?.commits
							? contribution.payload.commits[0]?.message
							: ''}
					</div>
				))}
			</div>
		</>
	);
}
