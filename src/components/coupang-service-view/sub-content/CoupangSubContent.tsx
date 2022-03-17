import {
  Box,
  Container,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { leftCoupangItems, rightCoupangItems } from 'assets/coupang-item'
import ClickPointerBtn from 'commons/click-pointer-btn/ClickPointerBtn'
import React from 'react'
import CoupangSmDownContent from './smdown-content/CoupangSmDownContent'
import useStyles from './styles'

function CoupangSubContent() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const onClickBtn = () => {}

  return (
    <Box pl={mdDown && 4} pr={mdDown && 4}>
      <Hidden mdUp>
        <CoupangSmDownContent />
      </Hidden>
      <Box pb={smDown ? 6 : 15}>
        <Container maxWidth='lg'>
          <Box className={classes.root}>
            <Box className={classes.itemListBox}>
              {leftCoupangItems.map((item, idx) => (
                <Box className={classes.itemBox} key={idx}>
                  <Box className={classes.itemImgBox}>
                    <img src={item.icon} alt='coupang service icon' />
                  </Box>
                  <Typography
                    variant={smDown ? 'body2' : mdDown ? 'body1' : 'h6'}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Hidden smDown>
              <Box className={classes.mainImgBox}>
                <img src='coupang_sub_img.png' alt='coupang mockup' />
              </Box>
            </Hidden>

            <Box className={classes.itemListBox}>
              {rightCoupangItems.map((item, idx) => (
                <Box className={classes.itemBox} key={idx}>
                  <Box className={classes.itemImgBox}>
                    <img src={item.icon} alt='coupang service icon' />
                  </Box>
                  <Typography
                    variant={smDown ? 'body2' : mdDown ? 'body1' : 'h6'}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <ClickPointerBtn title='더 자세히 보기' onClick={onClickBtn} />
        </Container>
      </Box>
    </Box>
  )
}

export default CoupangSubContent
