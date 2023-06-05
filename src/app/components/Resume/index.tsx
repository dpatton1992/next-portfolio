'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import {
	Box,
	Card,
	CardBody,
	CardHeader,
	chakra,
	Flex,
	Heading,
	Link,
	List,
	ListIcon,
	ListItem,
	Spacer,
	Stack,
	StackDivider,
	Text,
	IconButton,
	useBreakpointValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { Masonry } from '../Masonry';
// import Slick from 'react-slick';

const cardSettings = {
	icon: CheckCircleIcon,
	iconColor: 'green.500',
	listSpacing: 1,
	height: 'auto',
	width: '100%',
	maxWidth: '450px',
	py: '1em',
	px: '2em',
};

export default function Resume() {
	const containerRef = useRef(null);
	return (
		<Box width="full" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
			<chakra.h1
				textAlign={'center'}
				fontSize={'4xl'}
				maxWidth={'xl'}
				mx={'auto'}
				py={10}
				fontWeight={'bold'}
			>
				A formal summary of my experience
			</chakra.h1>
			<Masonry rowHeight={40} colWidth={'25em'}>
				<SeniorOnboardingManager />
				<PartnerTechnicalSolutions />
				<TechnicalImplementationSpecialist />
				<DigitalProjectManager />
				<JuniorDev />
				<FreelanceCard />
			</Masonry>
		</Box>
	);
}

function SeniorOnboardingManager() {
	const { icon, iconColor, listSpacing, height, width, maxWidth, py, px } =
		cardSettings;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Card
				height={height}
				width={width}
				maxWidth={maxWidth}
				mx={'auto'}
				py={py}
				px={px}
			>
				<CardHeader>
					<Heading size="md">Technical Onboarding Manager</Heading>
					<Link href={'https://tilled.com/'}>Tilled</Link>
					<Text>(2023 - Present)</Text>
				</CardHeader>
				<CardBody py={0}>
					<Stack>
						<Box>
							<List spacing={listSpacing}>
								<ListItem key={1}>
									<ListIcon as={icon} color={iconColor} />
									Added Whitelabel functionality to our docs site, allowing
									developers to adjust the styles and business specific
									information in minutes
								</ListItem>
								<ListItem key={2}>
									<ListIcon as={icon} color={iconColor} />
									Registered custom components to the CMS editor for use by
									non-technical team members
								</ListItem>
								<ListItem key={3}>
									<ListIcon as={icon} color={iconColor} />
									Created Typescript developer resources and documentation
								</ListItem>
							</List>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</motion.div>
	);
}

function PartnerTechnicalSolutions() {
	const { icon, iconColor, listSpacing, height, width, maxWidth, py, px } =
		cardSettings;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Card
				height={height}
				width={width}
				maxWidth={maxWidth}
				mx={'auto'}
				py={py}
				px={px}
			>
				<CardHeader>
					<Heading size="md">Partner Technical Solutions Specialist</Heading>
					<Link href={'https://tilled.com/'}>Tilled</Link>
					<Text>(2022 - 2023)</Text>
				</CardHeader>
				<CardBody py={0}>
					<Stack>
						<Box>
							<List spacing={listSpacing}>
								<ListItem key={1}>
									<ListIcon as={icon} color={iconColor} />
									Created custom React Hook, useTilled, to facilitate
									implementation of our tokenization library, Tilled.js
								</ListItem>
								<ListItem key={2}>
									<ListIcon as={icon} color={iconColor} />
									Collaborated on the development of Tilled’s first backend SDK
								</ListItem>
								<ListItem key={3}>
									<ListIcon as={icon} color={iconColor} />
									Created a public-facing monorepo for code examples using
									JavaScript, React, and Node
								</ListItem>
								<ListItem key={4}>
									<ListIcon as={icon} color={iconColor} />
									Coordinated escalations from our Integrations team, Partner
									Ops, and merchant support
								</ListItem>
								<ListItem key={5}>
									<ListIcon as={icon} color={iconColor} />
									Developed our new documentation site using Hugo and NetlifyCMS
									and set up the accompanying CI/CD pipeline
								</ListItem>
								<ListItem key={6}>
									<ListIcon as={icon} color={iconColor} />
									Merged fixes to our admin console and Tilled.js, our client
									side tokenization library
								</ListItem>
							</List>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</motion.div>
	);
}
function TechnicalImplementationSpecialist() {
	const { icon, iconColor, listSpacing, height, width, maxWidth, py, px } =
		cardSettings;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Card
				height={height}
				width={width}
				maxWidth={maxWidth}
				mx={'auto'}
				py={py}
				px={px}
			>
				<CardHeader>
					<Heading size="md">Partner Technical Solutions Specialist</Heading>
					<Link href={'https://tilled.com/'}>Tilled</Link>
					<Text>(2022 - 2023)</Text>
				</CardHeader>
				<CardBody py={0}>
					<Stack>
						<Box>
							<List spacing={listSpacing}>
								<ListItem key={1}>
									<ListIcon as={icon} color={iconColor} />
									Solved tickets pertaining to the API and tokenization library
									daily
								</ListItem>
								<ListItem key={2}>
									<ListIcon as={icon} color={iconColor} />
									Obtained technical details from partners and conveyed it to
									our engineers
								</ListItem>
								<ListItem key={3}>
									<ListIcon as={icon} color={iconColor} />
									Contributed new feature to Tilled's Simple Payment Example
									during first Hackathon
								</ListItem>
								{/* You can also use custom icons from react-icons */}
								<ListItem key={4}>
									<ListIcon as={icon} color={iconColor} />
									Pushed UI fixes to frontend console
								</ListItem>
								<ListItem key={5}>
									<ListIcon as={icon} color={iconColor} />
									Managed docs.tilled.com and assisted in creating a white
									labeled version
								</ListItem>
							</List>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</motion.div>
	);
}

function DigitalProjectManager() {
	const { icon, iconColor, listSpacing, height, width, maxWidth, py, px } =
		cardSettings;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Card
				height={height}
				width={width}
				maxWidth={maxWidth}
				mx={'auto'}
				py={py}
				px={px}
			>
				<CardHeader>
					<Heading size="md">Digital Project Manager</Heading>
					<Link href={'https://thepalladiangroup.com/'}>
						The Palladian Group
					</Link>
					<Text>(2022)</Text>
				</CardHeader>
				<CardBody py={0}>
					<Stack>
						<Box>
							<List spacing={listSpacing}>
								<ListItem key={1}>
									<ListIcon as={icon} color={iconColor} />
									Coordinated between design and development teams to achieve
									client expectations
								</ListItem>
								<ListItem key={2}>
									<ListIcon as={icon} color={iconColor} />
									Contributed to proprietary OTT framework to integrate with our
									admin app using SwiftUI and Ember
								</ListItem>
								<ListItem key={3}>
									<ListIcon as={icon} color={iconColor} />
									Built and managed multiple web projects simultaneously
								</ListItem>
								<ListItem key={4}>
									<ListIcon as={icon} color={iconColor} />
									Maintained and pushed content to our flagship website,
									elysian.com
								</ListItem>
							</List>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</motion.div>
	);
}
function JuniorDev() {
	const { icon, iconColor, listSpacing, height, width, maxWidth, py, px } =
		cardSettings;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Card
				height={height}
				width={width}
				maxWidth={maxWidth}
				mx={'auto'}
				py={py}
				px={px}
			>
				<CardHeader>
					<Heading size="md">Junior Web Developer</Heading>
					<Link href={'https://thepalladiangroup.com/'}>
						The Palladian Group
					</Link>
					<Text>(2021-2022)</Text>
				</CardHeader>
				<CardBody py={0}>
					<Stack>
						<Box>
							<List spacing={listSpacing}>
								<ListItem key={1}>
									<ListIcon as={icon} color={iconColor} />
									Converted every magazine blog article to HTML and CSS to
									better integrate with our mobile app.
								</ListItem>
								<ListItem key={2}>
									<ListIcon as={icon} color={iconColor} />
									Migrated all our private repositories from BitBucket to
									Github.
								</ListItem>
								<ListItem key={3}>
									<ListIcon as={icon} color={iconColor} />
									Implemented and maintained redirects at the network layer.
								</ListItem>
								<ListItem key={4}>
									<ListIcon as={icon} color={iconColor} />
									Assisted in the creation of websites for our clients.
								</ListItem>
							</List>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</motion.div>
	);
}

function FreelanceCard() {
	const { icon, iconColor, listSpacing, height, width, maxWidth, py, px } =
		cardSettings;
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Card
				height={height}
				width={width}
				maxWidth={maxWidth}
				mx={'auto'}
				py={py}
				px={px}
			>
				<CardHeader>
					<Heading size="md">Web Developer</Heading>
					<Text>Freelance</Text>
					<Text>(2020 - 2021)</Text>
				</CardHeader>
				<CardBody py={0}>
					<Stack>
						<Box>
							<List spacing={listSpacing}>
								<ListItem key={1}>
									<ListIcon as={icon} color={iconColor} />
									Built websites for clients with a focus on accessibility and
									mobile responsiveness
								</ListItem>
								<ListItem key={2}>
									<ListIcon as={icon} color={iconColor} />
									Reviewed and troubleshot existing sites and implemented best
									practices
								</ListItem>
								<ListItem key={3}>
									<ListIcon as={icon} color={iconColor} />
									Utilized Lighthouse reports to optimize SEO
								</ListItem>
								<ListItem key={4}>
									<ListIcon as={icon} color={iconColor} />
									Analyze performance metrics in Google Search Console
								</ListItem>
							</List>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</motion.div>
	);
}
