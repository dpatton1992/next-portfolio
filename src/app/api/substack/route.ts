import { NextResponse } from 'next/server';

const SUBSTACK_RSS_URL = 'https://danielpatton.substack.com/feed';

export async function GET() {
	try {
		const response = await fetch(SUBSTACK_RSS_URL, {
			next: { revalidate: 3600 }, // Cache for 1 hour
		});

		if (!response.ok) {
			throw new Error('Failed to fetch RSS feed');
		}

		const xmlText = await response.text();
		const posts = parseRSSFeed(xmlText);

		return NextResponse.json({ posts });
	} catch (error) {
		console.error('Error fetching Substack RSS:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch blog posts' },
			{ status: 500 }
		);
	}
}

function parseRSSFeed(xmlText: string) {
	// Parse XML manually (simple parser for RSS 2.0 feeds)
	const items: any[] = [];
	const itemRegex = /<item>([\s\S]*?)<\/item>/g;
	let match;

	while ((match = itemRegex.exec(xmlText)) !== null) {
		const itemContent = match[1];
		
		const title = decodeHTMLEntities(extractTag(itemContent, 'title'));
		const link = extractTag(itemContent, 'link');
		const pubDate = extractTag(itemContent, 'pubDate');
		const description = extractTag(itemContent, 'description');
		
		// Extract text content from description (remove HTML)
		const contentSnippet = decodeHTMLEntities(
			description
				.replace(/<[^>]*>/g, '')
				.replace(/\s+/g, ' ')
				.trim()
		).substring(0, 200) + '...';

		items.push({
			title,
			link,
			pubDate,
			description,
			contentSnippet,
		});
	}

	return items;
}

function decodeHTMLEntities(text: string): string {
	// Decode common HTML entities
	return text
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&nbsp;/g, ' ')
		// Decode numeric entities (&#8220; etc)
		.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)))
		// Decode hex entities (&#x20AC; etc)
		.replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function extractTag(content: string, tagName: string): string {
	const regex = new RegExp(`<${tagName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tagName}>|<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
	const match = content.match(regex);
	return match ? (match[1] || match[2] || '').trim() : '';
}
