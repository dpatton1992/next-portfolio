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
					<Heading>Experienced and versatile technical problem-solver</Heading>
					<Stack spacing={4} color={'gray.500'} fontSize={'md'}>
						<Text>
							I&apos;m Daniel Patton, a results-oriented technologist with a
							passion for creating exceptional user experiences and driving
							positive business outcomes. My expertise lies in troubleshooting
							technical problems, web development, and RESTful APIs. I excel at
							creating developer resources, documentation, and automated testing
							processes to uphold high-quality code standards.
						</Text>
						<Text>
							Currently serving as a Senior Solution Engineer at Tilled since
							2023, I've been played a key role in facilitating integrations and offering
							technical expertise to support the sales team during
							customer-facing calls. Notable achievements include writing a
							proof of concept to automate dispute responses, developing the
							tilled-react UI library, and leading the UI/UX refactor of the
							partner console.
						</Text>
						<Text>
							In my previous roles at Tilled, I demonstrated a passion of
							developer experience, creating a new docs site and code examples
							in 3 different languages/frameworks. I also spearheaded the
							release of the tilled-node SDK and worked closely with developers
							undergoing integration. Before Tilled, my contributions as a
							Developer and Project Manager at The Palladian Group involved
							coordinating teams, leading development of an OTT framework, and
							managing multiple web projects. In my freelance career, I
							prioritized web development, emphasizing accessibility, mobile
							responsiveness, SEO, and performance optimization.
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
					<Image
						src={'/images/me.png'}
						alt="Picture of the author"
						width={500}
						height={0}
						className={styles.bio_image}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
