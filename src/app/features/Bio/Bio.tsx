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
							I&apos;m Daniel Patton, a highly driven technologist with a
							passion for creating exceptional user experiences and driving
							positive business outcomes. My expertise lies in Javascript
							ecosystem, web development, and RESTful APIs, enabling me to
							deliver innovative and efficient web solutions. I excel in
							creating developer resources, documentation, and automated testing
							processes to uphold high-quality code standards.
						</Text>
						<Text>
							Currently serving as a Senior Solution Engineer at Tilled in
							Broomfield, CO since 2023, I've been integral in planning
							integrations, creating workflows, and offering technical expertise
							to support the sales team during customer-facing calls. Notable
							achievements include automating dispute responses through code,
							developing the tilled-react UI library, and leading the refinement
							of the partner console.
						</Text>
						<Text>
							As a Senior Technical Onboarding Manager, I introduced whitelabel
							functionality to our documentation site, managed the release of
							the tilled-node SDK, and created an iOS checkout example
							application. In my prior roles as a Technical Implementation
							Specialist and Partner Technical Solutions Specialist, I led
							escalations, developed a public-facing monorepo, and played a key
							role in setting up a new documentation site. Before Tilled, my
							contributions as a Developer and Project Manager at The Palladian
							Group involved coordinating teams, leading development of an OTT
							framework, and managing multiple web projects. In my freelance
							career, I prioritized web development, emphasizing accessibility,
							mobile responsiveness, SEO and performance optimization.
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
						height={0}
						className={styles.bio_image}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
