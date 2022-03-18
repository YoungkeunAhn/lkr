import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  text: string
}
function CoupangCheckPointBox(props: Props) {
  const classes = useStyles()
  const { text } = props
  return (
    <Box className={classes.root}>
      <Typography
        component='span'
        className={classes.checkPoint}
        align='center'
        variant='caption'
      >
        check point
      </Typography>
      <Box className={classes.textBox}>
        <Typography variant='body2' align='left'>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default CoupangCheckPointBox
