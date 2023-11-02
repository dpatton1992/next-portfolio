import { Heading } from '@/app/components/Heading';
import { LoadingWheel } from '@/app/components/LoadingWheel';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { projects } from '../Projects/projectsList';
import styles from './Technologies.module.css';

export function Technologies() {
	const technologiesArray = projects.flatMap((project) => project.technologies);
	const [showComponent, setShowComponent] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowComponent(true);
		}, 500);
	}, []);
	return (
		<>
			<Heading
				heading="Technologies"
				subheading="Here are some of the technologies I've used in my projects. The bigger the word, the more I've used it."
			/>
			{showComponent ? (
				<WordCloud wordArray={technologiesArray} />
			) : (
				<LoadingWheel height="400px" width="1000px" />
			)}
		</>
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
				return { text: d, size: 10 + countInstances(d) * 30 };
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
				'href',
				(d: any) =>
					'https://www.google.com/search?q=' + d.text.replace(' ', '+')
			)
			.attr(
				'onclick',
				(d: any) =>
					`window.open('https://www.google.com/search?q=${d.text.replace(
						' ',
						'+'
					)}', '_blank')`
			)
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
