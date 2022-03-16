import { Box, ButtonBase, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

function SmDownScrollTop() {
  const classes = useStyles()

  const onClick = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <Box className={classes.root}>
      <ButtonBase className={classes.btn} onClick={onClick}>
        <Typography variant='caption' align='center'>
          TOP ↑
        </Typography>
      </ButtonBase>
    </Box>
  )
}

export default SmDownScrollTop
