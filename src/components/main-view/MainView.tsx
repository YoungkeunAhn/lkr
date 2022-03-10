import {
  Box,
  Container,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { mainSubText } from 'assets/sub-text'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import useStyles from './styles'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'

function MainView() {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <BackgroundCover>
        <Container maxWidth='xl'>
          <Box display='flex' justifyContent='space-between'>
            <Box className={classes.logoBox}>
              <img src='logo.png' alt='logo' />
              <Typography variant='body1'>LKR corpration</Typography>
            </Box>
            <Hidden mdUp>
              <IconButton>
                <MenuRoundedIcon className={classes.menuIcon} />
              </IconButton>
            </Hidden>
          </Box>
          <Box className={classes.textBox}>
            {mainSubText.map((text, idx) => (
              <Typography key={idx} variant={smDown ? 'h4' : 'h2'}>
                {text}
              </Typography>
            ))}
          </Box>
        </Container>
      </BackgroundCover>
    </Box>
  )
}

export default MainView
