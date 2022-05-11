import { createContext } from "react"

export type Step1Form = {
  fullName: string
  displayName: string
}

export type Step2Form = {
  workspaceName: string
  workspaceURL?: string
}

export type Step3Form = {
  usage: "user" | "team" | ""
}

const OnboardingContext = createContext<{
  step1: Step1Form
  step2: Step2Form
  step3: Step3Form

  setStep1: React.Dispatch<React.SetStateAction<Step1Form>>
  setStep2: React.Dispatch<React.SetStateAction<Step2Form>>
  setStep3: React.Dispatch<React.SetStateAction<Step3Form>>
}>({
  step1: {
    fullName: "",
    displayName: "",
  },
  step2: {
    workspaceName: "",
    workspaceURL: "",
  },
  step3: {
    usage: "",
  },

  setStep1: () => {},
  setStep2: () => {},
  setStep3: () => {},
})

export default OnboardingContext
