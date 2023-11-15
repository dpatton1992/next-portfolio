import styles from './Bio.module.css';
import {
	Container,
	SimpleGrid,
	Stack,
	useColorModeValue,
	Heading,
	StackDivider,
	Flex,
	Text,
	Image as ChakraImage,
} from '@chakra-ui/react';
import Image from 'next/image';

export function Bio() {
	return (
		<Container maxW={'5xl'} py={12}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Stack spacing={4}>
					<Text
						textTransform={'uppercase'}
						color={'blue.400'}
						fontWeight={600}
						fontSize={'sm'}
						bg={useColorModeValue('blue.50', 'blue.900')}
						p={2}
						alignSelf={'flex-start'}
						rounded={'md'}
					>
						My Story
					</Text>
					<Heading>A fullstack developer with frontend expertise</Heading>
					<Stack spacing={4} color={'gray.500'} fontSize={'md'}>
						<Text>
							I&apos;m Daniel Patton, a highly skilled and motivated Web
							Developer with a passion for creating exceptional user
							experiences. My expertise lies in JavaScript/TypeScript, React,
							Node.js, and other cutting-edge technologies, enabling me to
							deliver innovative and efficient web solutions.
						</Text>
						<Text>
							Throughout my experience as a implementation specialist, I've
							honed the ability to tailor solutions to meet specific business
							needs. Working closely with cross-functional teams, I excel in
							creating developer resources, documentation, and automated testing
							processes to uphold high-quality code standards.
						</Text>
						<Text>
							Continuously staying up-to-date with industry trends and best
							practices, I am driven to leverage my skills and creativity in
							contributing to dynamic and growth-oriented organizations. My
							focus remains on building visually appealing and user-centric web
							interfaces that optimize website performance.
						</Text>
						<Text>
							Join me on my journey as I strive to craft exceptional web
							experiences that leave a lasting impact on users and drive
							business success.
						</Text>
					</Stack>
					<Stack
						spacing={4}
						divider={
							<StackDivider
								borderColor={useColorModeValue('gray.100', 'gray.700')}
							/>
						}
					></Stack>
				</Stack>
				<Flex>
					{/* <ChakraImage
						rounded={'md'}
						alt={'feature image'}
						src={
							'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
						}
						objectFit={'cover'}
						className={styles.bio_image}
					/> */}
					<Image
						src={'/images/me.png'}
						alt="Picture of the author"
						width={500}
						height={500}
						style={{ objectFit: 'cover', borderRadius: '0.5em' }}
						className={styles.bio_image}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
