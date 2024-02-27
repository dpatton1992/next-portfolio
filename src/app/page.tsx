'use client';

import Head from '@/app/head';
import styles from '@/styles/page.module.css';
import { Navbar } from '@/app/features/Navbar';
import { Bio } from '@/app/features/Bio';
import { AnimatedHero } from '@/app/features/AnimatedHero';
import { Contact } from '@/app/features/Contact';

export default function Home() {
	return (
		<>
			<Head subTitle="Home" />
			<nav>
				<Navbar />
			</nav>
			<main className={styles.main}>
				<section id="hero" className={styles.section}>
					<AnimatedHero />
				</section>
				<section id="bio" className={styles.section}>
					<Bio />
				</section>
				<section id="contact" className={styles.section}>
					<Contact
						phone={'(404) 483-9426'}
						email={'me@danielpatton.dev'}
						location={'Greenville, SC'}
						linkedin={'https://www.linkedin.com/in/daniel-patton-developer'}
						github={'https://github.com/dpatton1992'}
						npm={'https://www.npmjs.com/~dpatt'}
					/>
				</section>
			</main>
		</>
	);
}
