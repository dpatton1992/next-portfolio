'use client';

import { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import headingStyles from '@/app/components/Heading/Heading.module.css';
import { Box, Heading, Text, Skeleton, SkeletonText } from '@chakra-ui/react';
import Link from 'next/link';

type BlogPost = {
	title: string;
	link: string;
	pubDate: string;
	description: string;
	contentSnippet: string;
};

export function Blog() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('/api/substack');
				if (!response.ok) {
					throw new Error('Failed to fetch blog posts');
				}
				const data = await response.json();
				setPosts(data.posts);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An error occurred');
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	return (
		<>
			<div className={headingStyles.heading}>
				<h2>Blog</h2>
				<p>
					Notes on software engineering, backend systems, and lessons learned building distributed payment infrastructure. Read more on{' '}
					<Link href={'https://danielpatton.substack.com'} target="_blank">
						Substack
					</Link>
					.
				</p>
			</div>
			{loading && (
				<div className={styles.blogContainer}>
					{[1, 2, 3].map((i) => (
						<Box key={i} className={styles.blogPost}>
							<Skeleton height="30px" width="70%" mb={3} />
							<Skeleton height="20px" width="40%" mb={2} />
							<SkeletonText mt="4" noOfLines={3} spacing="4" />
						</Box>
					))}
				</div>
			)}
			{error && (
				<div className={styles.blogContainer}>
					<Text color="red.500">Error loading blog posts: {error}</Text>
				</div>
			)}
			{!loading && !error && posts.length === 0 && (
				<div className={styles.blogContainer}>
					<Text>No blog posts available yet.</Text>
				</div>
			)}
			{!loading && !error && posts.length > 0 && (
				<div className={styles.blogContainer}>
					{posts.map((post) => (
						<BlogPostCard key={post.link} post={post} />
					))}
				</div>
			)}
		</>
	);
}

function BlogPostCard({ post }: { post: BlogPost }) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<Link href={post.link} target="_blank" className={styles.blogPostLink}>
			<Box className={styles.blogPost}>
				<Heading as="h3" size="lg" mb={2}>
					{post.title}
				</Heading>
				<Text fontSize="sm" color="gray.500" mb={3}>
					{formatDate(post.pubDate)}
				</Text>
				<Text className={styles.description}>
					{post.contentSnippet || post.description}
				</Text>
				<Text className={styles.readMore} color="green.400" mt={3}>
					Read more →
				</Text>
			</Box>
		</Link>
	);
}
