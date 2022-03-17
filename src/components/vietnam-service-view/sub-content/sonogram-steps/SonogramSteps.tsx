import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { sonogramServiceText } from 'data/vietnam-item'
import React from 'react'
import SonogramStepBox from './step-box/SonogramStepBox'
import useStyles from './styles'

function SonogramSteps() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <div className={classes.bgCover}>
        <Container maxWidth='lg'>
          <Box pr={mdDown && !smDown && 4} pl={mdDown && !smDown && 4}>
            <Typography
              className={classes.title}
              variant={mdDown ? 'h4' : 'h2'}
              align='center'
            >
              <div
                dangerouslySetInnerHTML={{ __html: sonogramServiceText.title }}
              ></div>
            </Typography>
            <Typography
              className={classes.subTitle}
              align='center'
              variant={mdDown ? 'body1' : 'h6'}
            >
              {sonogramServiceText.subTitle}
            </Typography>
            <Box className={classes.contentBox}>
              {sonogramServiceText.steps.map((step, idx) => (
                <>
                  <Box key={idx}>
                    <SonogramStepBox seq={idx + 1} {...step} />
                  </Box>
                  {idx !== sonogramServiceText.steps.length - 1 && (
                    <Box className={classes.coilImgBox}>
                      <img src='coil_arrow_1.png' alt='coil arrow' />
                    </Box>
                  )}
                </>
              ))}
            </Box>
          </Box>
        </Container>
      </div>
    </Box>
  )
}

export default SonogramSteps
