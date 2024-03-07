import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const utheme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode("gray.100", "gray.700")(props),
                color: mode("gray.800", "whiteAlpha.900")(props),
            }
        })
    }
}

const Provider = ({ children }) => {
    return (
        <ChakraProvider theme={extendTheme(utheme)}>
            <ColorModeScript initialColorMode={extendTheme(utheme).config.initialColorMode} />
            {children}
        </ChakraProvider>
    )
}

export default Provider