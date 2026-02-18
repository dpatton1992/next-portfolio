'use client';

import Head from '@/app/head';
import styles from '@/styles/page.module.css';
import { Navbar } from '@/app/features/Navbar';
import { Blog } from '@/app/features/Blog';

export default function BlogPage() {
	return (
		<>
			<Head subTitle="Blog" />
			<nav>
				<Navbar />
			</nav>
			<main className={styles.main}>
				<section id="blog" className={styles.section}>
					<Blog />
				</section>
			</main>
		</>
	);
}
