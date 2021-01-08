// 1. Import the extendTheme function
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Header from "../components/Header"
import colors from "../theme/foundations/colors"


const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default App