import { Box, Button, Container } from '@material-ui/core'
import { locationText } from 'assets/location-text'
import React from 'react'
import useStyles from './styles'
import LocationTextRowBox from './text-row-box/LocationTextRowBox'

function LocationSubContent() {
  const classes = useStyles()

  const onClickNaverBtn = () => {
    window.open(
      'https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%EC%9D%8D%EB%82%B4%EB%A1%9C%2015/address/14126587.941157136,4537201.365222318,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EB%8D%95%EC%96%91%EA%B5%AC%20%EC%9D%8D%EB%82%B4%EB%A1%9C%2015,new?c=14126557.2169777,4537196.0892069,19,0,0,0,dh'
    )
  }

  const onClickKakaoBtn = () => {
    window.open('http://kko.to/VE-Rend39')
  }

  return (
    <Container maxWidth='lg'>
      <Box className={classes.root}>
        <Box className={classes.mapBox}>
          <iframe
            title='google map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d789.2045325498956!2d126.90069982922905!3d37.70047005984279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa34f996a613cbe5!2zMzfCsDQyJzAxLjciTiAxMjbCsDU0JzA0LjUiRQ!5e0!3m2!1sko!2skr!4v1646721016883!5m2!1sko!2skr'
            width='100%'
            height='450'
            style={{ border: '0px' }}
            loading='lazy'
          />
        </Box>
        <Box className={classes.right}>
          <Box display='flex' flexDirection='column'>
            {locationText.map((item, idx) => (
              <LocationTextRowBox key={idx} {...item} />
            ))}
          </Box>
          <Box className={classes.btnBox}>
            <Button
              variant='contained'
              size='large'
              className={classes.naverBtn}
              onClick={onClickNaverBtn}
            >
              NAVER 지도보기
            </Button>
            <Button
              variant='contained'
              size='large'
              className={classes.kakaoBtn}
              onClick={onClickKakaoBtn}
            >
              KAKAO 지도보기
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default LocationSubContent
