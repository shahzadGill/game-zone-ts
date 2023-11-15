import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Also delete the old theme from browser local storage in the "Application" tab.
const config: ThemeConfig = {
    initialColorMode: 'dark'
}

const theme = extendTheme({config});

export default theme;