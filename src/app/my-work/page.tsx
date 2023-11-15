'use client';
import Head from '@/app/head';
import styles from '@/styles/page.module.css';
import { Navbar } from '@/app/features/Navbar';
import { Projects } from '@/app/features/Projects';
import { Technologies } from '@/app/features/Technologies';
// import { GithubActivity } from '@/app/features/GithubActivity';

export default function MyWork() {
	return (
		<>
			<Head subTitle="My Work" />
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
