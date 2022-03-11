import { Box, Container, Typography } from '@material-ui/core'
import { leftCoupangItems, rightCoupangItems } from 'assets/coupang-item'
import ClickPointerBtn from 'commons/click-pointer-btn/ClickPointerBtn'
import React from 'react'
import useStyles from './styles'

function CoupangSubContent() {
  const classes = useStyles()

  const onClickBtn = () => {}

  return (
    <Box pb={15}>
      <Container maxWidth='lg'>
        <Box className={classes.root}>
          <Box className={classes.itemListBox}>
            {leftCoupangItems.map((item, idx) => (
              <Box className={classes.itemBox} key={idx}>
                <Box className={classes.itemImgBox}>
                  <img src={item.icon} alt='coupang service icon' />
                </Box>
                <Typography variant='h6'>{item.title}</Typography>
              </Box>
            ))}
          </Box>
          <Box className={classes.mainImgBox}>
            <img src='coupang_sub_img.png' alt='coupang mockup' />
          </Box>

          <Box className={classes.itemListBox}>
            {rightCoupangItems.map((item, idx) => (
              <Box className={classes.itemBox} key={idx}>
                <Box className={classes.itemImgBox}>
                  <img src={item.icon} alt='coupang service icon' />
                </Box>
                <Typography variant='h6'>{item.title}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <ClickPointerBtn title='더 자세히 보기' onClick={onClickBtn} />
      </Container>
    </Box>
  )
}

export default CoupangSubContent
