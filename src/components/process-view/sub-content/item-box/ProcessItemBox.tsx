import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  seq: number
  title: string
  text: string[]
}

function ProcessItemBox(props: Props) {
  const classes = useStyles()
  const { seq, title, text } = props

  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography>STEP 0{seq}</Typography>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {seq !== 6 && (
          <Box className={classes.arrowBox}>
            <span className={classes.arrowSquare}></span>
            <span className={classes.arrowTriangle}></span>
          </Box>
        )}
      </Box>
      <Box className={classes.textBox}>
        {text.map((x, idx) => (
          <Typography key={idx}>{x}</Typography>
        ))}
      </Box>
    </Box>
  )
}

export default ProcessItemBox
