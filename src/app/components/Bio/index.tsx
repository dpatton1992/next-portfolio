'use client';

import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react';
import { use } from 'react';
// import {
//   IoAnalyticsSharp,
//   IoLogoBitcoin,
//   IoSearchSharp,
// } from 'react-icons/io5';
// import { ReactElement } from 'react';

// interface FeatureProps {
//   text: string;
//   iconBg: string;
//   icon?: ReactElement;
// }

// const Feature = ({ text, icon, iconBg }: FeatureProps) => {
//   return (
//     <Stack direction={'row'} align={'center'}>
//       <Flex
//         w={8}
//         h={8}
//         align={'center'}
//         justify={'center'}
//         rounded={'full'}
//         bg={iconBg}>
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

export default function Bio() {
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
					<Text color={'gray.500'} fontSize={'md'}>
						I was born and raised in Atlanta and from a young age, I found my
						niche in mathematics, competing in math competitions throughout my
						academic years. I always had a passion for finance and envisioned a
						future in the field. However, my love for technology was always
						present, and I enjoyed building basic websites and Flash games in my
						free time. After trying out various jobs, I finally decided to
						pursue web development full-time and began building websites with
						HTML, CSS, and Wordpress.
					</Text>
					<Text color={'gray.500'} fontSize={'md'}>
						In 2021, I joined an agency as one of two primary developers, hoping
						to expand my knowledge and skills. Seeking to broaden my horizons, I
						took a job at a fintech startup, Tilled, where I was able to build
						upon my skills and explore new technologies. There, I built our
						company's documentation site, docs.tilled.com, as well as other
						functioning apps using Javascript and React, utilizing Tilled's
						services. I am excited to continue to grow my skills in development
						and explore the vast possibilities that technology has to offer.
					</Text>
					<Stack
						spacing={4}
						divider={
							<StackDivider
								borderColor={useColorModeValue('gray.100', 'gray.700')}
							/>
						}
					>
						{/* <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            /> */}
					</Stack>
				</Stack>
				<Flex>
					<Image
						rounded={'md'}
						alt={'feature image'}
						src={
							'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
						}
						objectFit={'cover'}
					/>
				</Flex>
			</SimpleGrid>
		</Container>
	);
}
