import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  children: React.ReactNode
  background?: string
}
function TitleContentFrame(props: Props) {
  const { title, children, background } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Typography variant="body1" className={classes.lkrLogo} align="center">
          LKR
        </Typography>
        <Typography variant="h4" className={classes.title} align="center">
          {title.toUpperCase()}
        </Typography>
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}

export default TitleContentFrame
