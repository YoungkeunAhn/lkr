import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  text: string
}

function LocationTextRowBox(props: Props) {
  const classes = useStyles()
  const { title, text } = props

  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography className={classes.title}>{title.toUpperCase()}</Typography>
      </Box>
      <Typography className={classes.text}>{text}</Typography>
    </Box>
  )
}

export default LocationTextRowBox
