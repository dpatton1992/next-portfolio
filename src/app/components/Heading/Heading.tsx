import styles from './Heading.module.css';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export function Heading(props: {
	heading: string;
	headingTag?: HeadingTag;
	subheading: string;
}) {
	const { heading, subheading } = props;
	const { headingTag } = props || 'h2';

	return (
		<div className={styles.heading}>
			{headingTag === 'h1' ? (
				<h1>{heading}</h1>
			) : headingTag === 'h3' ? (
				<h3>{heading}</h3>
			) : headingTag === 'h4' ? (
				<h4>{heading}</h4>
			) : headingTag === 'h5' ? (
				<h5>{heading}</h5>
			) : headingTag === 'h6' ? (
				<h6>{heading}</h6>
			) : (
				<h2>{heading}</h2>
			)}
			<p>{subheading}</p>
		</div>
	);
}
