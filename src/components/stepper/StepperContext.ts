import { createContext } from "react"

type StepperContextType = {
  next: () => void
  previous: () => void
  current: number
  total: number
}

const StepperContext = createContext<StepperContextType>({
  next: () => {},
  previous: () => {},
  current: 0,
  total: 0,
})

export default StepperContext
