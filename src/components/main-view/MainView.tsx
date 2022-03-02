import { Box, Container, Typography } from '@material-ui/core'
import { mainSubText } from 'assets/sub-text'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import useStyles from './styles'

function MainView() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <BackgroundCover>
        <Container maxWidth="xl">
          <Box className={classes.logoBox}>
            <img src="logo.png" alt="logo" />
            <Typography variant="body1">LKR corpration</Typography>
          </Box>
          <Box className={classes.textBox}>
            {mainSubText.map((text, idx) => (
              <Typography key={idx} variant="h2">
                {text}
              </Typography>
            ))}
          </Box>
        </Container>
      </BackgroundCover>
    </Box>
  )
}

export default MainView
