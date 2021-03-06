import {
  Box,
  Container,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import ClickPointerBtn from 'commons/click-pointer-btn/ClickPointerBtn'
import { leftCoupangItems, rightCoupangItems } from 'data/coupang-item'
import React from 'react'
import CoupangSmDownContent from './smdown-content/CoupangSmDownContent'
import useStyles from './styles'

function CoupangContent() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const onClickBtn = () => {}

  return (
    <Box pl={mdDown && !smDown && 4} pr={mdDown && !smDown && 4}>
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
          <ClickPointerBtn title='??? ????????? ??????' onClick={onClickBtn} />
        </Container>
      </Box>
    </Box>
  )
}

export default CoupangContent
