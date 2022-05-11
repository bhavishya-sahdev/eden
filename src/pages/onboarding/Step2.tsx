import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react"
import StepperContext from "components/stepper/StepperContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import OnboardingContext from "./OnboardingContext"

const Step2 = () => {
  const { next } = useContext(StepperContext)
  const { step2, setStep2 } = useContext(OnboardingContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof step2>({
    defaultValues: step2,
  })

  const onSubmit = handleSubmit((data) => {
    setStep2(data)
    next()
  })

  return (
    <Box>
      <Heading size="lg" textAlign="center" mb={3}>
        Let's set up a home for all your work
      </Heading>
      <Text color="secondary.600" textAlign="center" mb={9}>
        You can always create another workspace later.
      </Text>

      <Box width="360px" margin="auto">
        <form onSubmit={onSubmit}>
          <FormControl mb={4} isInvalid={Boolean(errors.workspaceName)}>
            <FormLabel htmlFor="workspaceName" color="secondary.600">
              Workspace Name
            </FormLabel>
            <Input
              size="lg"
              fontSize="sm"
              id="workspaceName"
              type="workspaceName"
              focusBorderColor="primary.500"
              placeholder="Eden"
              _placeholder={{ color: "secondary.500" }}
              {...register("workspaceName", { required: "Required" })}
            />
            <FormErrorMessage>
              {errors.workspaceName && errors.workspaceName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl mb={6}>
            <FormLabel htmlFor="displayName" color="secondary.600">
              Workspace URL <Text display="inline">(optional)</Text>
            </FormLabel>
            <InputGroup size="lg">
              <InputLeftAddon
                color="secondary.500"
                fontWeight="light"
                fontSize="sm"
              >
                www.eden.com/
              </InputLeftAddon>
              <Input
                focusBorderColor="primary.500"
                id="displayName"
                fontSize="sm"
                type="displayName"
                placeholder="Example"
                _placeholder={{ color: "secondary.500" }}
                {...register("workspaceURL")}
              />
            </InputGroup>
          </FormControl>

          <Button
            background="primary.500"
            color="white"
            _hover={{ bg: "primary.600" }}
            _active={{ bg: "primary.700" }}
            isFullWidth
            size="lg"
            fontWeight="normal"
            fontSize="sm"
            type="submit"
          >
            Create Workspace
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Step2
