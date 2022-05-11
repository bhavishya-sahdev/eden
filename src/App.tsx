import "@fontsource/inter"
import { Box, ChakraProvider } from "@chakra-ui/react"
import theme from "chakra/theme"
import OnboardingPage from "pages/onboarding"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box className="App">
        <OnboardingPage />
      </Box>
    </ChakraProvider>
  )
}

export default App
