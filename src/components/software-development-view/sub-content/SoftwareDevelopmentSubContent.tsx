import { Box, Container, Typography } from '@material-ui/core'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import useStyles from './styles'

const bgText1 = 'WE ARE CREATIVE'
const bgText2 = 'AND PASSIONATE'

function SoftwareDevelopmentSubContent() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <BackgroundCover>
        <Container maxWidth="xl">
          <Box className={classes.bgText}>
            <Typography variant="h1" align="center">
              {bgText1}
            </Typography>
            <Typography variant="h1" align="center">
              {bgText2}
            </Typography>
          </Box>
          <Box></Box>
        </Container>
      </BackgroundCover>
    </Box>
  )
}

export default SoftwareDevelopmentSubContent
