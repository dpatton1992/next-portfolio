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
						About Me
					</Text>
					<Heading>Backend Software Engineer building distributed payment systems</Heading>
					<Stack spacing={4} color={'gray.500'} fontSize={'md'}>
						<Text>
							I&apos;m Daniel Patton, a Backend Software Engineer specializing in distributed payment systems and service boundaries. Based in Greenville, SC, I design and implement scalable backend architectures that power fintech infrastructure.
						</Text>
						<Text>
							Currently at Tilled, I led the implementation of our first processor service (Paysafe) within our distributed architecture—designing domain event contracts, onboarding and payment state transitions, and multi-datastore persistence across Postgres, Redis, and DynamoDB. The modeling and validation conventions I established have been adopted across subsequent processor integrations.
						</Text>
						<Text>
							I maintain the tilled-node SDK, which processes over 250,000 weekly requests, and serve as the subject matter expert for onboarding, whitelabel, and Auth0-based authentication. Throughout my time at Tilled, I&apos;ve been promoted from Solutions Engineer to Senior Integrations Engineer to Software Engineer, building internal automation that improves partner onboarding visibility and mentoring engineers on backend modeling and event-driven patterns.
						</Text>
						<Text>
							Before Tilled, I contributed to backend services for a proprietary OTT platform at The Palladian Group and delivered 20+ production web applications. I hold a B.A. in Economics from Wofford College and am an AWS Certified Cloud Practitioner.
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
