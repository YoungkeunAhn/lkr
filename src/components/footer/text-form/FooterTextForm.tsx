import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  text: string
}

function FooterTextForm(props: Props) {
  const classes = useStyles()
  const { title, text } = props
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <Typography
        align='center'
        className={classes.title}
        variant={smDown ? 'caption' : 'body1'}
      >
        {title.toUpperCase()}
      </Typography>
      <Typography
        align='center'
        className={classes.divider}
        variant={smDown ? 'caption' : 'body1'}
      >
        /
      </Typography>
      <Typography
        align='center'
        className={classes.text}
        variant={smDown ? 'caption' : 'body1'}
      >
        {text}
      </Typography>
    </Box>
  )
}

export default FooterTextForm
