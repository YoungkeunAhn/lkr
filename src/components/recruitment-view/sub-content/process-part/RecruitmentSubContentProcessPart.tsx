import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { recruitmentProcess } from 'assets/recruitment-notice-text'
import React from 'react'
import { A11y, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecruitmentProcessIconBox from './icon-box/RecruitmentProcessIconBox'
import useStyles from './styles'

function RecruitmentSubContentProcessPart() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <Typography
        variant='h5'
        className={classes.subTitle}
        align={smDown ? 'center' : 'left'}
      >
        전형 프로세스
      </Typography>
      {smDown ? (
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
        >
          {recruitmentProcess.map((item, idx) => (
            <SwiperSlide key={idx}>
              <RecruitmentProcessIconBox {...item} />
              {idx !== recruitmentProcess.length - 1 && !smDown && (
                <Typography className={classes.gt} variant='h2'>
                  &gt;
                </Typography>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box className={classes.processListBox}>
          {recruitmentProcess.map((item, idx) => (
            <>
              <RecruitmentProcessIconBox key={idx} {...item} />
              {idx !== recruitmentProcess.length - 1 && (
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Typography
                    className={classes.gt}
                    variant={mdDown ? 'h4' : 'h2'}
                  >
                    &gt;
                  </Typography>
                </Box>
              )}
            </>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default RecruitmentSubContentProcessPart
