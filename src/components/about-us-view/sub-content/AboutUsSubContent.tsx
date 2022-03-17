import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import useStyles from './styles'

const textList = [
  '빠르게 변화하는 디지털 비즈니스 환경에 최적화된 방법을 끊임없이 찾고 있으며, 이에 해당하는 서비스를 제공함으로써 생기는 고객의 다양한 결과물과 피드백을 통해 날마다 새로운 경험과 노하우를 축척하고 있는 중입니다.',
  '늘 새로운 것을 생각하고, 설계하고, 만들고 디자인하며, 이를 개발하여 다양한 디지털 마케팅 비즈니스에 적용하고 있습니다. 웹은 물론 모바일앱, SNS, 쇼핑몰, 오픈마켓 등을 좀더 좋은 비즈니스 환경으로 제공하겠습니다.',
  '지금 쌓여가는 우리의 경험들은 파트너 및 클라이언트의 비즈니스 성장에 도움이 되리라 믿기에 어제도, 오늘도, 내일도 쉼없이 달려가는 중입니다.',
]

function AboutUsSubContent() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <BackgroundCover>
        <Container maxWidth='lg'>
          <Box pr={mdDown && !smDown && 4} pl={mdDown && !smDown && 4}>
            <Box className={classes.textBox}>
              <Typography variant='h3' className={classes.title}>
                우리는,
              </Typography>
              <Box className={classes.contentBox}>
                {textList.map((text, idx) => (
                  <Typography variant={mdDown ? 'body1' : 'h6'} key={idx}>
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </BackgroundCover>
    </Box>
  )
}

export default AboutUsSubContent
