import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import { sonogramServiceText } from 'assets/vietnam-item'
import SmDownSonogramStepBox from './step-box/SmDownSonogramStepBox'

function SmDownSonogramSteps() {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography variant='h5' className={classes.title} align='center'>
        <span>초음파 영상서비스 </span>운영중
      </Typography>
      <Typography className={classes.mainText} align='center' variant='body1'>
        모바일 App환경에서 태아의 초음파영상을 제공! 제휴 병원을 이용한 산모들이
        초음파영상을 장소, 시간에 구애없이 확인할 수 있도록 플랫폼을 운영합니다.
      </Typography>
      <Box>
        {sonogramServiceText.steps.map((item, idx) => (
          <SmDownSonogramStepBox key={idx} seq={idx + 1} {...item} />
        ))}
      </Box>
    </Container>
  )
}

export default SmDownSonogramSteps
