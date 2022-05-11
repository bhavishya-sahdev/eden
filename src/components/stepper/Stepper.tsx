import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react"
import StepperContext from "./StepperContext"

const Stepper = () => {
  const { current, total } = useContext(StepperContext)
  const steps = Array.from(Array(total + 1).keys())

  return (
    <Box display="flex">
      {steps.map((d) => (
        <Box display="flex" alignItems="center" key={d}>
          {d !== 0 && (
            <Box
              background={d <= current ? "primary.500" : "secondary.300"}
              height="2px"
              width="30px"
            ></Box>
          )}

          <Box
            width="40px"
            height="40px"
            background={d <= current ? "primary.500" : "white"}
            borderWidth="1px"
            borderColor={d <= current ? "primary.500" : "secondary.300"}
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={d <= current ? "white" : "secondary.600"}
          >
            <Text fontSize="sm">{d + 1}</Text>
          </Box>

          {d !== total && (
            <Box
              background={d <= current ? "primary.500" : "secondary.300"}
              height="2px"
              width="30px"
            ></Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default Stepper
