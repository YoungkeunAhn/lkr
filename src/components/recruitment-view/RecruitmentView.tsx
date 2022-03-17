import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import {
  recruitmentMainText,
  smDownRecruitmentMainText,
} from 'assets/main-text'
import { recruitmentSubText, recruitmentSubTextSmDown } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import React from 'react'
import { A11y, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import useStyles from './stlyes'
import RecruitmentSubContent from './sub-content/RecruitmentSubContent'

function RecruitmentView() {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <TitleContentFrame
        title='recruitment'
        mainText={recruitmentMainText}
        smDownMainText={smDownRecruitmentMainText}
      >
        <Container>
          <Box className={classes.subTextWrapper}>
            <Box className={classes.subTextBox}>
              {smDown ? (
                <Swiper
                  modules={[Navigation, A11y]}
                  slidesPerView={1}
                  navigation
                  scrollbar={{ draggable: true }}
                  spaceBetween={50}
                >
                  {recruitmentSubTextSmDown.map((text, idx) => (
                    <SwiperSlide>
                      <Box width='100%' display='flex' justifyContent='center'>
                        <div
                          className={classes.sliderTextBox}
                          key={idx}
                          dangerouslySetInnerHTML={{ __html: text }}
                        ></div>
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                recruitmentSubText.map((text, idx) => (
                  <Typography key={idx} variant='h6'>
                    {text}
                  </Typography>
                ))
              )}
            </Box>
            <Box className={classes.imgBox}>
              <img src='recruitment_image1.png' alt='recruitment lkr' />
            </Box>
          </Box>
        </Container>
      </TitleContentFrame>
      <RecruitmentSubContent />
    </Box>
  )
}

export default RecruitmentView
