'use client';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/projects.module.css';
import Navbar from '../features/Navbar';
import { Box, Heading, Text } from '@chakra-ui/react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
// import { container } from 'googleapis/build/src/apis/container';
import { projects } from './projectsList';
import { LoadingWheel } from '../components/LoadingWheel';

export default function Projects() {
	const technologiesArray = projects.flatMap((project) => project.technologies);
	const [showComponent, setShowComponent] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowComponent(true);
		}, 500);
	}, []);
	return (
		<>
			<Head>
				<title>Daniel Patton | Projects</title>
				<meta name="description" content="Projects created by Daniel Patton" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav>
				<Navbar />
			</nav>
			<main className={styles.main}>
				<section id="technologies" className={styles.technologies_section}>
					<div className={styles.heading}>
						<h2>See my work!</h2>
						<p>
							Here are some of the technologies I've used in my projects. The
							bigger the word, the more I've used it.
						</p>
					</div>
					{showComponent ? (
						<WordCloud wordArray={technologiesArray} />
					) : (
						<LoadingWheel height="500px" width="1000px" />
					)}
				</section>
				<section id="projects" className={styles.projects_section}>
					<div className={styles.heading}>
						<h2>Projects</h2>
						<p>
							Check out some of my personal and professional projects,
							demonstrating skills in React, Node, Swift, serverless platforms,
							and automating CI/CD pipelines.
						</p>
					</div>
					{projects.map((project) => (
						<ProjectSummary
							key={project.title}
							title={project.title}
							description={project.description}
							technologies={project.technologies}
							link={project.link}
							image={project.image}
						/>
					))}
				</section>
			</main>
		</>
	);
}

function ProjectSummary(props: {
	title: string;
	description: string;
	technologies: string[];
	link: { href: string; text: string };
	image: string;
}) {
	const { title, description, technologies, link, image } = props;
	return (
		<div
			id={'#' + title[0].toLowerCase() + title.slice(1)}
			className={styles.project}
		>
			<Box className={styles.projectText}>
				<Heading as="h2" size="lg">
					{title}
				</Heading>
				<Text>{description}</Text>
				<Text>
					Technologies used:
					{/* TODO: Use tech icons */}
					{/* {technologies.map((tech) => (
							// {tech}
							// <CheckCircleIcon key={tech} /> // TODO: Use tech icons
							<span>{tech}</span>// TODO: Use tech icons
						))} */}
					{'  ' + technologies.join(', ')}
				</Text>
				<a href={link.href} target="_blank" rel="noreferrer">
					{link.text}
				</a>
			</Box>
			<div className={styles.image_container}>
				<a href={link.href} target="_blank" rel="noreferrer">
					<Image src={image} alt={title} width={500} height={500} />
					{/* <img src={image} alt={title} /> */}
				</a>
			</div>
		</div>
	);
}

function WordCloud(props: { wordArray: string[] }) {
	const { wordArray } = props;
	const countInstances = (word: string) =>
		wordArray.filter((w) => w === word).length;
	const filteredWords = wordArray.filter(
		(word: string, index: number, self: string[]) =>
			self.indexOf(word) === index
	);
	const layout = cloud()
		.size([1000, 500])
		.words(
			filteredWords.map(function (d) {
				return { text: d, size: 10 + countInstances(d) * 40, test: 'haha' };
			})
		)
		.padding(5)
		.rotate(function () {
			return ~~(Math.random() * 2) * 90;
		})
		.font('Arial')
		.fontSize((d) => d.size || 0)
		.on('end', draw);

	// layout.start();

	function draw(words: string[]) {
		d3.select('#word-cloud-container')
			.append('svg')
			.attr('preserveAspectRatio', 'xMinYMin meet')
			.attr('viewBox', '0 0 1000 500')
			.append('g')
			.attr(
				'transform',
				'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')'
			)
			.selectAll('text')
			.data(words)
			.enter()
			.append('text')
			.style('font-size', (d: any) => d.size + 'px')
			.style('font-family', 'Arial')
			.style('fill', 'var(--chakra-colors-chakra-body-text')
			.attr('text-anchor', 'middle')
			.attr(
				'transform',
				(d: any) => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')' // Typescript doesn't like the type of d... giggity 😏
			)
			.text((d: any) => d.text);
	}
	const containerRef: MutableRefObject<null> = useRef(null);
	useEffect(() => {
		const container = containerRef.current as unknown as HTMLDivElement;
		if (!container?.innerHTML) layout.start();
	});

	return (
		<div
			id="word-cloud-container"
			className={styles.word_cloud_container}
			ref={containerRef}
		/>
	);
}
