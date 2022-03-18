import { createTheme } from '@material-ui/core'

export const themes = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1040,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: `"Segoe UI"`,
  },
})
