import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  seq: number
  title: string
  text: string
}

function ProcessItemBox(props: Props) {
  const classes = useStyles()
  const { seq, title, text } = props

  return (
    <Box>
      <Box>
        <Typography>STEP 0{seq}</Typography>
        <Typography variant="h6">{title}</Typography>
        <Box>
          <span className={classes.arrowSquare}></span>
          <span className={classes.arrowTriangle}></span>
        </Box>
      </Box>
      <Box>
        <Typography>{text}</Typography>
      </Box>
    </Box>
  )
}

export default ProcessItemBox
