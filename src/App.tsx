import { Hidden, useMediaQuery, useTheme } from '@material-ui/core'
import AboutUsView from 'components/about-us-view/AboutUsView'
import CoupangServiceView from 'components/coupang-service-view/CoupangServiceView'
import Footer from 'components/footer/Footer'
import LocationView from 'components/location-view/LocationView'
import MainView from 'components/main-view/MainView'
import MenuDialog from 'components/menu-dialog/MenuDialog'
import NavBar from 'components/nav-bar/NavBar'
import NewsroomView from 'components/newsroom-view/NewsroomView'
import ProcessView from 'components/process-view/ProcessView'
import RecruitmentView from 'components/recruitment-view/RecruitmentView'
import SmDownScrollTop from 'components/smDown-scroll-top/SmDownScrollTop'
import SoftwareDevelopmentView from 'components/software-development-view/SoftwareDevelopmentView'
import VietnamServiceView from 'components/vietnam-service-view/VietnamServiceView'
import React, { useEffect, useState } from 'react'

type OffsetValueType = {
  top: number
  bottom: number
}

function App() {
  const [isBgBlack, setIsBgBlack] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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

  const onCreateOffsetValue = () => {
    const offsetValue: OffsetValueType[] = []

    for (let i = 1; i < 7; i++) {
      const blackBgDom = document.getElementById(`blackBg${i}`)
      if (blackBgDom) {
        if (i === 4) {
          offsetValue.push({
            top: blackBgDom.offsetTop,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop,
          })
        } else if (i === 5) {
          offsetValue.push({
            top: blackBgDom.offsetTop + 450,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop + 450,
          })
        } else if (i === 6) {
          offsetValue.push({
            top: blackBgDom.offsetTop + 800,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop + 800,
          })
        } else {
          offsetValue.push({
            top: blackBgDom.offsetTop - 500,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop - 500,
          })
        }
      }
    }

    return offsetValue
  }

  const onChangeNavColor = (offsetValue: OffsetValueType[]) => {
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
  }

  useEffect(() => {
    if (!mdDown) {
      const offsetValue = onCreateOffsetValue()
      onChangeNavColor(offsetValue)
    }
  }, [mdDown])

  return (
    <div>
      <section id='main'>
        <MainView openDialog={openDialog} />
      </section>
      <Hidden lgUp>
        <SmDownScrollTop />
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
      <Footer />
      <Hidden lgDown>
        <NavBar onClick={onClickMenu} isBgBlack={isBgBlack} />
      </Hidden>
      <MenuDialog open={open} onClose={onClose} />
    </div>
  )
}

export default App
