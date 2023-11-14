'use client';
import Head from 'next/head';
import styles from '@/styles/page.module.css';
import { Navbar } from '@/app/features/Navbar';
import { Projects } from '@/app/features/Projects';
import { Technologies } from '@/app/features/Technologies';
import { GithubActivity } from '@/app/features/GithubActivity';

export default function MyWork() {
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
				{/* WIP */}
				{/* <section id="github-activity" className={styles.section}>
					<GithubActivity />
				</section> */}
				<section id="projects" className={styles.section}>
					<Projects />
				</section>
				<section id="technologies" className={styles.section}>
					<Technologies />
				</section>
			</main>
		</>
	);
}
