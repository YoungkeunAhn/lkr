import { Box, ButtonBase, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

function StickyMenuBar() {
  const classes = useStyles()

  const onClick = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <Box className={classes.root}>
      <ButtonBase className={classes.btn} onClick={onClick}>
        <Typography align='center'>TOP</Typography>
        <span className={classes.triangle}></span>
      </ButtonBase>
    </Box>
  )
}

export default StickyMenuBar
