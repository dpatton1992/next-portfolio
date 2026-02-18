import { Button, IconButton } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiNpm } from 'react-icons/si';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import styles from './Contact.module.css';
import { Heading } from '@/app/components/Heading';

export function Contact(props: {
	phone: string;
	email: string;
	location: string;
	linkedin: string;
	github: string;
	npm: string;
	substack: string;
}) {
	const { phone, email, location, linkedin, github, npm, substack } = props;

	return (
		<>
			<Heading
				heading="Contact"
				subheading="Let's talk about your next project."
			/>
			<div className={styles.contact_container}>
				<div className={styles.contact_info}>
					<div className={styles.contact_links}>
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
						<a href={'http://maps.google.com/?q=' + location.replace(' ', '')}>
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
					</div>
					<div className={styles.social_links}>
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
							aria-label="npm"
							variant="ghost"
							size="lg"
							isRound={true}
							_hover={{ bg: 'green.400' }}
							icon={<SiNpm size="28px" />}
							onClick={() => {
								window.open(npm);
							}}
						/>
					</div>
				</div>
				<div className={styles.contact_form}>
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						action="/success"
					>
						<input type="hidden" name="form-name" value="contact" />
						<div className={styles.form_group}>
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="name" />
						</div>
						<div className={styles.form_group}>
							<label htmlFor="email">Email</label>
							<input type="email" name="email" id="email" />
						</div>
						<div className={styles.form_group}>
							<label htmlFor="message">Message</label>
							<textarea name="message" id="message" rows={5} />
						</div>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</>
	);
}
