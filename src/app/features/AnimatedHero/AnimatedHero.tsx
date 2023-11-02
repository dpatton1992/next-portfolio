import styles from './AnimatedHero.module.css';
import { Container, Stack, Heading, Button, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function AnimatedHero() {
	const headingText = "Hello, I'm Daniel.";
	const subText = 'I build websites and web apps.';

	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.06,
			},
		},
	};
	const letter = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const getResume = () => {
		window.location.href =
			'https://www.dropbox.com/scl/fi/vass789n64goj5j96glcr/Resume_11-1-23.docx.pdf?rlkey=42b2sfooa0480q0pxfotb1w1v&dl=0';
	};

	return (
		<>
			<Container maxW={'3xl'} minH={'h-full'}>
				<Stack
					as={Box}
					textAlign={'center'}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
					mb={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						lineHeight={'110%'}
					>
						<motion.span
							className="homepage--header"
							variants={sentence}
							initial="hidden"
							animate="visible"
						>
							{headingText.split('').map((char, index) => {
								return (
									<motion.span key={char + '-' + index} variants={letter}>
										{char}
										{/* {char !== "'" ? char : `&#39;`} */}
									</motion.span>
								);
							})}
							<br />
							<Text as={'span'} color={'green.400'}>
								{subText.split('').map((char, index) => {
									return (
										<motion.span key={char + '-' + index} variants={letter}>
											{char}
										</motion.span>
									);
								})}
							</Text>
						</motion.span>
					</Heading>
					{/* <Text color={'gray.500'}>
          Developer, Frontend Engineer, Tier 3 Support Expert.
          </Text> */}
					<Stack
						direction={'column'}
						spacing={3}
						align={'center'}
						alignSelf={'center'}
						position={'relative'}
					>
						<Button
							colorScheme={'green'}
							bg={'green.400'}
							rounded={'full'}
							px={6}
							_hover={{
								bg: 'green.500',
							}}
							onClick={() => {
								window.location.href = './contact';
							}}
						>
							Let&apos;s talk
						</Button>
						<Link
							href="https://www.dropbox.com/scl/fi/vass789n64goj5j96glcr/Resume_11-1-23.docx.pdf?rlkey=42b2sfooa0480q0pxfotb1w1v&dl=0"
							target="_blank"
							className={styles.resume_link}
						>
							Download my resume
						</Link>
					</Stack>
				</Stack>
			</Container>
		</>
	);
}
