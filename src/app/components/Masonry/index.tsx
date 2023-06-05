// masonry/index.js
import React, { useRef, useState, useEffect } from 'react';

export function Masonry(props: {
	rowHeight?: number;
	colWidth?: string;
	children: Array<JSX.Element>;
}) {
	const ref = useRef(null);
	const [state, setState] = useState({ spans: [] as Array<number> });

	// sums up the heights of all child nodes for each grid item
	const sumUp = (acc: number, node: Element) => acc + node.scrollHeight;

	const computeSpans = () => {
		const container = ref.current as unknown as HTMLElement;
		const spans: Array<number> = [];

		Array.from(container.children as HTMLCollectionOf<HTMLElement>).forEach(
			(child) => {
				const rowHeight = props.rowHeight || 40;
				const childHeight = Array.from(child.children).reduce(sumUp, 0);
				const span = Math.ceil(childHeight / rowHeight);
				spans.push(span + 1);
				child.style.height = span * rowHeight + `px`;
			}
		);
		setState({ spans });
	};
	useEffect(() => {
		computeSpans();
		return () => {
			window.removeEventListener('resize', computeSpans);
		};
	}, []);

	return (
		<div
			ref={ref}
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(auto-fit, minmax(${props.colWidth}, 1fr))`,
				gridAutoRows: `calc(${props.rowHeight || 40}px - 2em)`,
				gridGap: '2em',
				justifyContent: 'center',
			}}
		>
			{props.children.map((child, i) => (
				<div
					style={{ gridRow: `span ${state.spans[i]}`, height: 'max-content' }}
					key={i}
				>
					{child}
				</div>
			))}
		</div>
	);
}
