import { Box, Container } from '@material-ui/core'
import { coupangServiceSubText } from 'assets/sub-text'
import React from 'react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import CoupangCheckPointBox from './check-point-box/CoupangCheckPointBox'
import useStyles from './styles'

function CoupangSmDownContent() {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Box className={classes.mainImgBox}>
        <img src='coupang_sub_img.png' alt='coupang mockup' />
      </Box>
      <Box width='100%'>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {coupangServiceSubText.map((text, idx) => (
            <SwiperSlide key={idx}>
              <CoupangCheckPointBox text={text} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  )
}

export default CoupangSmDownContent
