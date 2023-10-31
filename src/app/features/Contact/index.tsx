'use client';

import styles from '@/styles/contact.module.css';
import {
	Container,
	Flex,
	Box,
	Heading,
	Text,
	IconButton,
	Button,
	VStack,
	HStack,
	Wrap,
	WrapItem,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
	Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export function Contact(props: {
	phone: string;
	email: string;
	location: string;
	linkedin: string;
	github: string;
	discord: string;
}) {
	const { phone, email, location, linkedin, github, discord } = props;
	return (
		// <Container maxW="full" mt={0} centerContent overflow="hidden">
		<Flex>
			<Box
				// bg="#02054B"
				// color="white"
				borderRadius="lg"
				// m={{ sm: 4, md: 16, lg: 10 }}
				p={{ sm: 5, md: 5, lg: 16 }}
			>
				<Box p={4}>
					<Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
						<WrapItem>
							<Box>
								<Heading>Contact</Heading>
								<Text mt={{ sm: 3, md: 3, lg: 5 }}>
									Fill up the form below to contact
								</Text>
								<Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
									<VStack pl={0} spacing={3} alignItems="flex-start">
										<a href={'tel: ' + phone}>
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												_hover={{ border: '2px solid #48BB78' }}
												leftIcon={<MdPhone color="#48BB78" size="20px" />}
											>
												{phone}
											</Button>
										</a>
										<a href={'mailto: ' + email}>
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												_hover={{ border: '2px solid #48BB78' }}
												leftIcon={<MdEmail color="#48BB78" size="20px" />}
											>
												{email}
											</Button>
										</a>
										<a
											href={
												'http://maps.google.com/?q=' + location.replace(' ', '')
											}
										>
											<Button
												size="md"
												height="48px"
												width="200px"
												variant="ghost"
												_hover={{ border: '2px solid #48BB78' }}
												leftIcon={<MdLocationOn color="#48BB78" size="20px" />}
											>
												{location}
											</Button>
										</a>
									</VStack>
								</Box>
								<HStack
									mt={{ lg: 10, md: 10 }}
									spacing={5}
									px={5}
									alignItems="flex-start"
								>
									<IconButton
										aria-label="linkedin"
										variant="ghost"
										size="lg"
										isRound={true}
										_hover={{ bg: 'green.400' }}
										icon={<BsLinkedin size="28px" />}
										onClick={() => {
											window.open(linkedin);
										}}
									/>
									<IconButton
										aria-label="github"
										variant="ghost"
										size="lg"
										isRound={true}
										_hover={{ bg: 'green.400' }}
										icon={<BsGithub size="28px" />}
										onClick={() => {
											window.open(github);
										}}
									/>
									<IconButton
										aria-label="discord"
										variant="ghost"
										size="lg"
										isRound={true}
										_hover={{ bg: 'green.400' }}
										icon={<BsDiscord size="28px" />}
										onClick={() => {
											window.open(discord);
										}}
									/>
								</HStack>
							</Box>
						</WrapItem>
						<WrapItem>
							<Box bg="white" borderRadius="lg">
								{/* <Box m={8}> */}
								<Box m={8} color="#0B0E3F">
									<VStack spacing={5}>
										<FormControl id="name">
											<FormLabel>Your Name</FormLabel>
											<InputGroup borderColor="#E0E1E7">
												<InputLeftElement
													pointerEvents="none"
													children={<BsPerson />}
												/>
												<Input type="text" size="md" />
											</InputGroup>
										</FormControl>
										<FormControl id="name">
											<FormLabel>Mail</FormLabel>
											<InputGroup borderColor="#E0E1E7">
												<InputLeftElement
													pointerEvents="none"
													children={<MdOutlineEmail />}
												/>
												<Input type="text" size="md" />
											</InputGroup>
										</FormControl>
										<FormControl id="name">
											<FormLabel>Message</FormLabel>
											<Textarea
												color="gray.500"
												borderColor="gray.300"
												_hover={{
													borderRadius: 'gray.300',
												}}
											/>
										</FormControl>
										<FormControl id="name" float="right">
											<Button
												variant="solid"
												bg="green.400"
												color="white"
												_hover={{}}
											>
												Send Message
											</Button>
										</FormControl>
									</VStack>
								</Box>
							</Box>
						</WrapItem>
					</Wrap>
				</Box>
			</Box>
		</Flex>
		// </Container>
	);
}
