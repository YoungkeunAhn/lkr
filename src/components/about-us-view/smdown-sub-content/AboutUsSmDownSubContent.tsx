import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const textList = [
  '빠르게 변화하는 디지털 비즈니스 환경에 최적화된 방법을 끊임없이 찾고 있으며, 이에 해당하는 서비스를 제공함으로써 생기는 고객의 다양한 결과물과 피드백을 통해 날마다 새로운 경험과 노하우를 축척하고 있는 중입니다.',
  '지금 쌓여가는 우리의 경험들은 파트너 및 클라이언트의 비즈니스 성장에 도움이 되리라 믿기에 어제도, 오늘도, 내일도 쉼없이 달려가는 중입니다.',
]

function AboutUsSmDownSubContent() {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Box className={classes.imgBox}>
        <img src='smDownAboutUsSubImg.png' alt='past now future' />
      </Box>
      <Typography variant='h6' align='center' className={classes.title}>
        우리는,
      </Typography>
      <Box className={classes.subTextBox}>
        {textList.map((text, idx) => (
          <Typography key={idx} variant='body2' align='center'>
            {text}
          </Typography>
        ))}
      </Box>
    </Container>
  )
}

export default AboutUsSmDownSubContent
