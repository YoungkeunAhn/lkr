import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  text: string
}

function LocationTextRowBox(props: Props) {
  const classes = useStyles()
  const { title, text } = props
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography
          className={classes.title}
          variant={smDown ? 'body2' : 'body1'}
        >
          {title.toUpperCase()}
        </Typography>
      </Box>
      <Typography className={classes.text} variant={smDown ? 'body2' : 'body1'}>
        {text}
      </Typography>
    </Box>
  )
}

export default LocationTextRowBox
