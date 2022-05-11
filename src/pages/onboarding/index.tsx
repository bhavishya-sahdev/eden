import { Box, Container, Heading, useBreakpointValue } from "@chakra-ui/react"

import Step1 from "pages/onboarding/Step1"
import Step2 from "pages/onboarding/Step2"
import Step3 from "pages/onboarding/Step3"
import Step4 from "pages/onboarding/Step4"

import { ReactComponent as Logo } from "assets/logo.svg"
import StepperContext from "components/stepper/StepperContext"
import { useState } from "react"
import Stepper from "components/stepper/Stepper"
import OnboardingContext, {
  type Step2Form,
  type Step1Form,
  type Step3Form,
} from "./OnboardingContext"

const TOTAL_STEPS = 3

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const [step1Form, setStep1Form] = useState<Step1Form>({
    displayName: "",
    fullName: "",
  })
  const [step2Form, setStep2Form] = useState<Step2Form>({
    workspaceName: "",
    workspaceURL: "",
  })
  const [step3Form, setStep3Form] = useState<Step3Form>({
    usage: "",
  })

  const responsiveProperties = {
    boxVerticalPadding: useBreakpointValue({ base: "10", md: "20" }),
    stepperMargin: useBreakpointValue({ base: "8", md: "16" }),
  }

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Step1 />
      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
      case 3:
        return <Step4 />
      default:
        return null
    }
  }

  return (
    <OnboardingContext.Provider
      value={{
        step1: step1Form,
        step2: step2Form,
        step3: step3Form,

        setStep1: setStep1Form,
        setStep2: setStep2Form,
        setStep3: setStep3Form,
      }}
    >
      <StepperContext.Provider
        value={{
          current: currentStep,
          next: handleNext,
          previous: handlePrevious,
          total: TOTAL_STEPS,
        }}
      >
        <Container maxWidth="600px" minHeight="100vh">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={responsiveProperties.boxVerticalPadding}
          >
            <Box display="flex" gridGap="3" alignItems="center">
              <Logo />
              <Heading size="lg">Eden</Heading>
            </Box>

            <Box my={responsiveProperties.stepperMargin}>
              <Stepper />
            </Box>
            {renderStep()}
          </Box>
        </Container>
      </StepperContext.Provider>
    </OnboardingContext.Provider>
  )
}

export default OnboardingPage
