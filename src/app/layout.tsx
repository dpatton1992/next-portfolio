import '@/styles/globals.css';
import { Providers } from './providers';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function() {
							try {
								var mode = localStorage.getItem('chakra-ui-color-mode');
								if (!mode) mode = 'dark';
								if (mode === 'dark') {
									document.documentElement.classList.add('chakra-ui-dark');
									document.documentElement.style.colorScheme = 'dark';
								} else {
									document.documentElement.classList.remove('chakra-ui-dark');
									document.documentElement.style.colorScheme = 'light';
								}
							} catch (e) {}
						})();`,
					}}
				/>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
