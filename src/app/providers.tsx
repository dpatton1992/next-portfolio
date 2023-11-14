// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

// exporting for use in mutations elsewhere
export const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<CacheProvider>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider>{children}</ChakraProvider>
			</QueryClientProvider>
		</CacheProvider>
	);
}
