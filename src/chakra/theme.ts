import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  colors: {
    primary: { 400: "#7E68F6", 500: "#654de4", 600: "#5037D2", 700: "#4832C0" },
    secondary: {
      300: "#E2E2E3",
      400: "#abafba",
      500: "#969caa",
      600: "#6c7484",
    },
  },
})

export default theme
