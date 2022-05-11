import { Box, Button, Heading, Text } from "@chakra-ui/react"
import StepperContext from "components/stepper/StepperContext"
import { useContext, useState } from "react"
import { ReactComponent as User } from "assets/user.svg"
import { ReactComponent as Users } from "assets/users.svg"
import OnboardingContext from "./OnboardingContext"

const Step3 = () => {
  const { next } = useContext(StepperContext)
  const { step3, setStep3 } = useContext(OnboardingContext)

  const [selected, setSelected] = useState<"user" | "team" | "">(step3.usage)

  const handleSelect = (type: "user" | "team") => {
    setSelected(type)
    setStep3({ ...step3, usage: type })
  }

  return (
    <Box>
      <Heading size="lg" textAlign="center" mb={3}>
        How are you planning to use Eden?
      </Heading>
      <Text color="secondary.600" textAlign="center" mb={9}>
        We'll streamline your setup experience accordingly.
      </Text>

      <Box width="360px" margin="auto">
        <Box display="flex" gridGap="16px" mb={6}>
          <Box
            as="button"
            width="50%"
            textAlign="left"
            padding="16px"
            borderRadius="5px"
            border="1px solid"
            borderColor={selected === "user" ? "primary.500" : "secondary.300"}
            onClick={() => handleSelect("user")}
            _hover={{ borderColor: "primary.500" }}
          >
            <Box width="20px" mb={4}>
              <User
                width="100%"
                color={selected === "user" ? "#654de4" : " #000"}
              />
            </Box>
            <Text fontWeight="bold" mb="4px">
              For myself
            </Text>
            <Text color="secondary.400" fontSize="sm" fontWeight="medium">
              Write better. Think more clearly. Stay organized.
            </Text>
          </Box>

          <Box
            as="button"
            width="50%"
            textAlign="left"
            padding="16px"
            borderRadius="5px"
            border="1px solid"
            borderColor={selected === "team" ? "primary.500" : "secondary.300"}
            onClick={() => handleSelect("team")}
            _hover={{ borderColor: "primary.500" }}
          >
            <Box width="20px" mb={4}>
              <Users width="100%" />
            </Box>
            <Text fontWeight="bold" mb="4px">
              With my team
            </Text>
            <Text color="secondary.400" fontSize="sm" fontWeight="medium">
              Wikis, docs, tasks &amp; projects, all in one place.
            </Text>
          </Box>
        </Box>

        <Button
          background="primary.500"
          color="white"
          onClick={next}
          _hover={{ bg: "primary.600" }}
          _active={{ bg: "primary.700" }}
          isFullWidth
          size="lg"
          fontWeight="normal"
          fontSize="sm"
        >
          Create Workspace
        </Button>
      </Box>
    </Box>
  )
}

export default Step3
