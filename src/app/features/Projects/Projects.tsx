import { projects } from './projectsList';
import styles from './Projects.module.css';
import headingStyles from '@/app/components/Heading/Heading.module.css';
import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

export function Projects() {
	return (
		<>
			<div className={headingStyles.heading}>
				<h2>Projects</h2>
				<p>Check out some of my personal and professional projects, demonstrating skills in React, Node, Swift, serverless platforms, and automating CI/CD pipelines. You can also view my work on <Link href={'https://www.npmjs.com/~dpatt'}>NPM</Link> and <Link href={'https://github.com/dpatton1992'}>Github</Link>.</p>
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
			id={'#' + title.toLowerCase().replaceAll(/\W/g, '-')}
			className={styles.project}
		>
			<Box className={styles.projectText}>
				<Heading as="h2" size="lg">
					{title}
				</Heading>
				<Text className={styles.description_text}>{description}</Text>
				<Text>
					<span className={styles.inline_heading}>Technologies used:</span>
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
				<Link href={link.href} target="_blank">
					<Image src={image} alt={title} width={500} height={500} />
				</Link>
			</div>
		</div>
	);
}
