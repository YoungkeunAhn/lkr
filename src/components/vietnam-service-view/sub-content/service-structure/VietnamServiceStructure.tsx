import {
  Box,
  Container,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'

function VietnamServiceStructure() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth='lg'>
      <Box mt={15} mb={15}>
        <Typography variant='h2' align='center' className={classes.title}>
          <span>베트남 병원솔루션</span> 서비스 구조도
        </Typography>
        <Box className={classes.contentBox}>
          <Box className={classes.dotBorderBox}>
            <Box className={clsx(classes.iconTextBox, classes.mockupImageBox)}>
              <Hidden smDown>
                <Typography>Platform User</Typography>
              </Hidden>
              <img src='vss_mockup.png' alt='' />
              <Hidden mdUp>
                <Typography variant='body2'>Platform User</Typography>
              </Hidden>
            </Box>
            <Box>
              <div className={classes.dotBorderCircle}>
                <div
                  className={clsx(
                    classes.structureTextBox,
                    classes.circleTopLeftText
                  )}
                >
                  <Typography
                    variant={mdDown ? 'caption' : 'body1'}
                    align='center'
                  >
                    산모의 태아 초음파 촬영
                  </Typography>
                </div>
                <div
                  className={clsx(
                    classes.structureTextBox,
                    classes.circleRightText
                  )}
                >
                  <Typography
                    variant={mdDown ? 'caption' : 'body1'}
                    align='center'
                  >
                    산모 및 초음파 정보 연동
                  </Typography>
                </div>
                <div
                  className={clsx(
                    classes.structureTextBox,
                    classes.circleBottomLeftText
                  )}
                >
                  <Typography
                    variant={mdDown ? 'caption' : 'body1'}
                    align='center'
                  >
                    초음파 영상 서비스 제공
                  </Typography>
                </div>
                <Box className={classes.bgColorTextBox}>
                  {'순환구조'.split('').map((word, idx) => (
                    <Typography key={idx} variant='h4'>
                      {word}
                    </Typography>
                  ))}
                </Box>
                <div className={classes.topTriangle}></div>
                <div className={classes.rightTriangle}></div>
                <div className={classes.bottomTriangle}></div>
                <div className={classes.leftTriangle}></div>
                <Box className={clsx(classes.iconTextBox, classes.hospital)}>
                  <img src='black_color_hospital.png' alt='hospital icon' />
                  <Typography variant='body2'>Association Hospital</Typography>
                </Box>
                <Box className={clsx(classes.iconTextBox, classes.server)}>
                  <img src='big_data_icon.png' alt='big data icon' />
                  <Typography variant='body2'>Service Server</Typography>
                </Box>
              </div>
            </Box>
          </Box>
          <Hidden mdDown>
            <Box className={classes.rightBox}>
              <div className={classes.rightText}>
                <Typography variant='h6' align='center'>
                  구축된 DB 보험사와 연계
                </Typography>
              </div>
              <img src='coil_arrow_2.png' alt='right coil arrow' />
            </Box>
          </Hidden>
        </Box>
      </Box>
    </Container>
  )
}

export default VietnamServiceStructure
