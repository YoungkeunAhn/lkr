import React from 'react'
import useStyles from './styles'

type Props = {
  children: React.ReactNode
}

function BackgroundCover(props: Props) {
  const { children } = props
  const classes = useStyles()

  return <div className={classes.root}>{children}</div>
}

export default BackgroundCover
