import { createTheme } from '@material-ui/core'

export const themes = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1700,
    },
  },
  typography: {
    fontFamily: `"Segoe UI"`,
  },
})
