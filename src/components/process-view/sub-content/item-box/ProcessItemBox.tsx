import { Box, Hidden, Typography, useTheme } from '@material-ui/core'
import clsx from 'clsx'
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
    <Box>
      <Box className={classes.root}>
        <Box className={classes.titleBox}>
          <Typography>STEP 0{seq}</Typography>
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
          <Hidden smDown>
            {seq !== 6 && (
              <Box className={classes.arrowBox}>
                <span className={classes.arrowSquare}></span>
                <span className={classes.arrowTriangle}></span>
              </Box>
            )}
          </Hidden>
          {/* {smDown
          ? seq !== 6 && (
              <Box className={clsx(classes.arrowBox, classes.smDownArrowBox)}>
                <span className={classes.arrowSquare}></span>
                <span className={classes.arrowTriangle}></span>
              </Box>
            )
          : seq !== 6 && (
              <Box className={classes.arrowBox}>
                <span className={classes.arrowSquare}></span>
                <span className={classes.arrowTriangle}></span>
              </Box>
            )} */}
        </Box>
        <Box className={classes.textBox}>
          {text.map((x, idx) => (
            <Typography variant='caption' key={idx}>
              {x}
            </Typography>
          ))}
        </Box>
      </Box>
      <Hidden mdUp>
        {seq !== 6 && (
          <Box className={clsx(classes.arrowBox, classes.smDownArrowBox)}>
            <span className={classes.arrowSquare}></span>
            <span className={classes.arrowTriangle}></span>
          </Box>
        )}
      </Hidden>
    </Box>
  )
}

export default ProcessItemBox
