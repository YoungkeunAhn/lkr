import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  text: string
}

function FooterTextForm(props: Props) {
  const classes = useStyles()
  const { title, text } = props

  return (
    <Box className={classes.root}>
      <Typography align="center" className={classes.title}>
        {title.toUpperCase()}
      </Typography>
      <Typography align="center" className={classes.divider}>
        /
      </Typography>
      <Typography align="center" className={classes.text}>
        {text}
      </Typography>
    </Box>
  )
}

export default FooterTextForm
