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
                bg: mode("#F4F4F5", "#212121")(props),
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