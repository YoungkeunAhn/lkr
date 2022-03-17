import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useMemo } from 'react'
import useStyles from './styles'

type Props = {
  seq: number
  title: string
  content: string
}

function SonogramStepBox(props: Props) {
  const classes = useStyles()
  const { seq, title, content } = props
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className={classes.root}>
      <div className={classes.circle}>
        <Box className={classes.circleTop}>
          <Typography className={classes.stepText} align='center' variant='h6'>
            STEP 0{seq}
          </Typography>
        </Box>
        <Box className={classes.circleBottom}>
          <div
            className={classes.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Box>
      </div>
      <Typography
        className={classes.text}
        variant={mdDown ? 'body2' : 'body1'}
        align='center'
      >
        {content}
      </Typography>
    </Box>
  )
}

export default SonogramStepBox
