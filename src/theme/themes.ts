import { createTheme } from '@material-ui/core'

export const themes = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 1024,
      lg: 1920,
      xl: 2400,
    },
  },
  typography: {
    fontFamily: `"Segoe UI"`,
  },
})
