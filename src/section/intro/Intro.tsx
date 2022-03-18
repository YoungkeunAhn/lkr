import {
  Box,
  Container,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import { mainSubText } from 'data/sub-text'
import clsx from 'clsx'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React, { useState } from 'react'
import useStyles from './styles'
import MenuDialog from 'components/intro/menu-dialog/MenuDialog'

function Intro() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState<boolean>(false)

  const openDialog = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <div id='blackBg1'>
      <Box className={classes.root}>
        <BackgroundCover>
          <Box pl={smDown ? 4 : 10}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Box className={classes.logoBox}>
                <img src='logo.png' alt='logo' />
                <Typography variant='body1'>LKR corpration</Typography>
              </Box>
              <Hidden lgUp>
                <IconButton onClick={openDialog}>
                  <MenuRoundedIcon className={classes.menuIcon} />
                </IconButton>
              </Hidden>
            </Box>
            <Box className={classes.textBox}>
              {mainSubText.map((text, idx) => (
                <Typography
                  key={idx}
                  variant={
                    smDown ? 'h6' : mdDown ? 'h5' : idx === 0 ? 'h2' : 'h3'
                  }
                  className={clsx(idx === 0 && classes.firstLine)}
                >
                  {mdDown && idx === 0 ? text.slice(0, text.length - 6) : text}
                </Typography>
              ))}
            </Box>
          </Box>
        </BackgroundCover>
      </Box>
      <MenuDialog open={open} onClose={onClose} />
    </div>
  )
}

export default Intro
