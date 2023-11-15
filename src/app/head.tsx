import NextHead from 'next/head';
export default function Head(props: {
	subTitle?: string;
	children?: React.ReactNode;
}) {
	const { subTitle, children } = props;
	return (
		<>
			<title>Daniel Patton</title>
			{/* <title>Daniel Patton {subTitle ? '| ' + subTitle : ''}</title> */}
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			<meta
				name="description"
				content="I'm Daniel Patton, a highly skilled and motivated Web Developer with a passion for creating exceptional user experiences."
			/>
			<link rel="icon" href="/favicon.ico" />
			{children}
		</>
	);
}
