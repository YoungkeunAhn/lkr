import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  seq: number
  title: string
  content: string
}

function SonogramStepBox(props: Props) {
  const classes = useStyles()
  const { seq, title, content } = props

  return (
    <Box className={classes.root}>
      <div className={classes.circle}>
        <Box className={classes.circleTop}>
          <Typography className={classes.stepText} align="center" variant="h6">
            STEP 0{seq}
          </Typography>
        </Box>
        <Box className={classes.circleBottom}>
          <Typography align="center" variant="h5">
            {title}
          </Typography>
        </Box>
      </div>
      <Typography className={classes.text} variant="body1" align="center">
        {content}
      </Typography>
    </Box>
  )
}

export default SonogramStepBox
