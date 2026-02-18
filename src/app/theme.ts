import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    config,
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
})
