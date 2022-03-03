import { Box, Container, Typography } from '@material-ui/core'
import { sonogramServiceText } from 'assets/vietnam-item'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import SonogramStepBox from './step-box/SonogramStepBox'
import useStyles from './styles'

function SonogramSteps() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <div className={classes.bgCover}>
        <Container maxWidth="lg">
          <Typography className={classes.title} variant="h2" align="center">
            <div
              dangerouslySetInnerHTML={{ __html: sonogramServiceText.title }}
            ></div>
          </Typography>
          <Typography className={classes.subTitle} align="center" variant="h6">
            {sonogramServiceText.subTitle}
          </Typography>
          <Box className={classes.contentBox}>
            {sonogramServiceText.steps.map((step, idx) => (
              <Box display="flex" key={idx}>
                <SonogramStepBox seq={idx + 1} {...step} />
                {idx !== sonogramServiceText.steps.length - 1 && (
                  <img
                    src="coil_arrow_1.png"
                    alt="coil arrow"
                    className={classes.coilArrow}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </div>
    </Box>
  )
}

export default SonogramSteps
