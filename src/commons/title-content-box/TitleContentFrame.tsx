import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  children?: React.ReactNode
  mainText: string[]
  subText?: string[]
  background?: string
}
function TitleContentFrame(props: Props) {
  const { title, children, mainText, subText, background } = props
  const classes = useStyles()

  return (
    <Box className={classes.root} style={{ background }}>
      <Container maxWidth="xl">
        <Typography variant="body1" className={classes.lkrLogo} align="center">
          LKR
        </Typography>
        <Typography variant="h4" className={classes.title} align="center">
          {title.toUpperCase()}
        </Typography>
        <Box className={classes.mainTextBox}>
          {mainText.map((text, idx) => (
            <Typography key={idx} variant="h2" align="center">
              <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </Typography>
          ))}
        </Box>
        <Box className={classes.subTextBox}>
          {subText &&
            subText.map((text, idx) => (
              <Typography
                key={idx}
                variant="h5"
                align="center"
                style={{ lineHeight: subText.length === 1 ? '50px' : '' }}
              >
                {text}
              </Typography>
            ))}
        </Box>
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}

export default TitleContentFrame
