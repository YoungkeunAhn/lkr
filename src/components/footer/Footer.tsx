import { Box, ButtonBase, Hidden, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'
import FooterTextForm from './text-form/FooterTextForm'

function Footer() {
  const classes = useStyles()

  const onClickTopBtn = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Hidden mdUp>
          <ButtonBase onClick={onClickTopBtn}>
            <Typography
              className={clsx(classes.scrollTopBtn, classes.smDownScrollTopBtn)}
              align='center'
            >
              TOP ↑
            </Typography>
          </ButtonBase>
        </Hidden>
        <Box className={classes.logo}>
          <img src='logo.png' alt='logo' />
        </Box>
        <Box>
          <FooterTextForm title='business license' text='208-86-02402' />
        </Box>
        <Box display='flex'>
          <FooterTextForm title='tel' text='+82-2-1833-9540(TEL)' />
          <span style={{ marginLeft: 16 }}>
            <FooterTextForm title='fax' text='+82-31-624-2227' />
          </span>
        </Box>
        <Box>
          <FooterTextForm
            title='address'
            text='402,PLAZA15, Eumnae-ro, Deogyang-gu, Goyang-si, Gyeonggi-do, Republic of Korea'
          />
        </Box>
        <Typography
          className={classes.copyright}
          variant='caption'
          align='center'
        >
          Copyright© 2021 LKR All Rights Reserved.
        </Typography>
      </Box>
      <Hidden smDown>
        <ButtonBase onClick={onClickTopBtn}>
          <Typography className={classes.scrollTopBtn} align='center'>
            TOP ↑
          </Typography>
        </ButtonBase>
      </Hidden>
    </Box>
  )
}

export default Footer
