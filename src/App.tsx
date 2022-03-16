import {
  Box,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import AboutUsView from 'components/about-us-view/AboutUsView'
import CoupangServiceView from 'components/coupang-service-view/CoupangServiceView'
import Footer from 'components/footer/Footer'
import LocationView from 'components/location-view/LocationView'
import MainView from 'components/main-view/MainView'
import useStyles from 'components/main-view/styles'
import MenuDialog from 'components/menu-dialog/MenuDialog'
import NavBar from 'components/nav-bar/NavBar'
import NewsroomView from 'components/newsroom-view/NewsroomView'
import ProcessView from 'components/process-view/ProcessView'
import RecruitmentView from 'components/recruitment-view/RecruitmentView'
import SoftwareDevelopmentView from 'components/software-development-view/SoftwareDevelopmentView'
import StickyMenuBar from 'components/sticky-menu-bar/StickyMenuBar'
import VietnamServiceView from 'components/vietnam-service-view/VietnamServiceView'
import React, { useEffect, useState } from 'react'

function App() {
  const [isBgBlack, setIsBgBlack] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const onClickMenu = (sectionId: string) => {
    const currentSection = document.getElementById(sectionId)
    window.scrollTo({ behavior: 'smooth', top: currentSection?.offsetTop })
  }

  const openDialog = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const offsetValue: Array<{
      dom: HTMLElement
      top: number
      bottom: number
    }> = []
    for (let i = 1; i < 7; i++) {
      const blackBgDom = document.getElementById(`blackBg${i}`)
      if (blackBgDom) {
        offsetValue.push({
          dom: blackBgDom,
          top:
            i === 5
              ? blackBgDom.offsetTop - 200
              : i === 6
              ? blackBgDom.offsetTop
              : blackBgDom.offsetTop - 350,
          bottom:
            i === 5
              ? blackBgDom.offsetTop + blackBgDom.offsetHeight - 200
              : i === 6
              ? blackBgDom.offsetTop + blackBgDom.offsetHeight
              : blackBgDom.offsetTop + blackBgDom.offsetHeight - 350,
        })
      }
    }

    window.addEventListener('scroll', function (e) {
      if (
        this.window.scrollY > offsetValue[0].top &&
        this.window.scrollY < offsetValue[0].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[1].top &&
        this.window.scrollY < offsetValue[1].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[2].top &&
        this.window.scrollY < offsetValue[2].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[3].top &&
        this.window.scrollY < offsetValue[3].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[4].top &&
        this.window.scrollY < offsetValue[4].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[5].top &&
        this.window.scrollY < offsetValue[5].bottom
      ) {
        setIsBgBlack(true)
      } else {
        setIsBgBlack(false)
      }
    })
  }, [])

  return (
    <div>
      <section id='main'>
        <MainView openDialog={openDialog} />
      </section>
      <Box>
        <Hidden mdUp>
          <StickyMenuBar />
        </Hidden>
        <section id='aboutUs'>
          <AboutUsView />
        </section>
        <section id='software'>
          <SoftwareDevelopmentView />
        </section>
        <section id='process'>
          <ProcessView />
        </section>
        <section id='coupang'>
          <CoupangServiceView />
        </section>
        <section id='vietnam'>
          <VietnamServiceView />
        </section>
        <section id='recruitment'>
          <RecruitmentView />
        </section>
        <section id='newsroom'>
          <NewsroomView />
        </section>
        <section id='location'>
          <LocationView />
        </section>
      </Box>
      <Footer />
      <Hidden mdDown>
        <NavBar onClick={onClickMenu} isBgBlack={isBgBlack} />
      </Hidden>
      <MenuDialog open={open} onClose={onClose} />
    </div>
  )
}

export default App
