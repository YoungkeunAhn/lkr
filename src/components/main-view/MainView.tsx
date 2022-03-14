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
import { mainSubText } from 'assets/sub-text'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import useStyles from './styles'

type Props = {
  openDialog: () => void
}

function MainView(props: Props) {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const { openDialog } = props

  return (
    <div id='blackBg1'>
      <Box className={classes.root}>
        <BackgroundCover>
          <Container maxWidth='xl'>
            <Box display='flex' justifyContent='space-between'>
              <Box className={classes.logoBox}>
                <img src='logo.png' alt='logo' />
                <Typography variant='body1'>LKR corpration</Typography>
              </Box>
              <Hidden mdUp>
                <IconButton onClick={openDialog}>
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
    </div>
  )
}

export default MainView
