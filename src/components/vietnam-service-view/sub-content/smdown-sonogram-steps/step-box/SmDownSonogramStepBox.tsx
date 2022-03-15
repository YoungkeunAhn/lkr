import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  content: string
  seq: number
}

function SmDownSonogramStepBox(props: Props) {
  const classes = useStyles()
  const { title, content, seq } = props

  return (
    <Box className={classes.root}>
      <Box className={classes.bgCover}>
        <div className={classes.circle}>
          <Box className={classes.circleTop}>
            <Typography
              className={classes.stepText}
              align='center'
              variant='h6'
            >
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
        <Typography className={classes.text} variant='body1' align='center'>
          {content}
        </Typography>
      </Box>
    </Box>
  )
}

export default SmDownSonogramStepBox
