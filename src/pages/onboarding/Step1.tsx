import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react"
import StepperContext from "components/stepper/StepperContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import OnboardingContext from "./OnboardingContext"

const Step1 = () => {
  const { next } = useContext(StepperContext)
  const { step1, setStep1 } = useContext(OnboardingContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof step1>({
    defaultValues: step1,
  })

  const onSubmit = handleSubmit((data) => {
    setStep1(data)
    next()
  })

  return (
    <Box>
      <Heading size="lg" textAlign="center" mb={3}>
        Welcome! First things first...
      </Heading>
      <Text color="secondary.600" textAlign="center" mb={9}>
        You can always change them later.
      </Text>

      <Box width="360px" margin="auto">
        <form onSubmit={onSubmit}>
          <FormControl mb={4} isInvalid={Boolean(errors.fullName)}>
            <FormLabel htmlFor="fullName" color="secondary.700">
              Full Name
            </FormLabel>
            <Input
              size="lg"
              fontSize="sm"
              id="fullName"
              type="fullName"
              focusBorderColor="primary.500"
              placeholder="Steve Jobs"
              _placeholder={{ color: "secondary.500" }}
              {...register("fullName", { required: "Required" })}
            />
            <FormErrorMessage>
              {errors.fullName && errors.fullName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl mb={6} isInvalid={Boolean(errors.displayName)}>
            <FormLabel htmlFor="displayName" color="secondary.600">
              Display Name
            </FormLabel>
            <Input
              id="displayName"
              size="lg"
              fontSize="sm"
              focusBorderColor="primary.500"
              type="displayName"
              placeholder="Steve"
              _placeholder={{ color: "secondary.500" }}
              {...register("displayName", { required: "Required" })}
            />
            <FormErrorMessage>
              {errors.displayName && errors.displayName.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            background="primary.500"
            color="white"
            isFullWidth
            size="lg"
            fontWeight="normal"
            fontSize="sm"
            type="submit"
            _hover={{ bg: "primary.700" }}
            _active={{ bg: "primary.800" }}
          >
            Create Workspace
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Step1
