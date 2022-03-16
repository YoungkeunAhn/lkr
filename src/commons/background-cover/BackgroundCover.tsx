import { Box } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  children?: React.ReactNode
  noBg?: true
}

function BackgroundCover(props: Props) {
  const { children, noBg } = props
  const classes = useStyles()

  return (
    <Box
      className={classes.root}
      style={{
        background: noBg ? 'none' : '',
        paddingTop: noBg && 0,
        paddingBottom: noBg && 0,
      }}
    >
      {children}
    </Box>
  )
}

export default BackgroundCover
