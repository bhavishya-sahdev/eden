import { Box, Button, Heading, Text } from "@chakra-ui/react"
import { ReactComponent as Submit } from "assets/submit.svg"
import { useContext } from "react"
import OnboardingContext from "./OnboardingContext"

const Step4 = () => {
  const { step1 } = useContext(OnboardingContext)

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Box mt={16} mb={10}>
        <Submit />
      </Box>
      <Heading size="lg" textAlign="center" mb={3}>
        Congratulations, {step1.displayName}!
      </Heading>
      <Text color="secondary.600" textAlign="center" mb={9}>
        You have completed onboarding, you can start using the Eden!
      </Text>

      <Button
        background="primary.500"
        color="white"
        width="400px"
        _hover={{ bg: "primary.600" }}
        _active={{ bg: "primary.700" }}
        onClick={() => window.location.reload()}
        size="lg"
        fontWeight="normal"
        fontSize="sm"
      >
        Launch Eden
      </Button>
    </Box>
  )
}

export default Step4
