import { Hidden, useMediaQuery, useTheme } from '@material-ui/core'
import MenuDialog from 'components/intro/menu-dialog/MenuDialog'
import NavBar from 'components/nav-bar/NavBar'
import SmDownScrollTop from 'components/smDown-scroll-top/SmDownScrollTop'
import Vietnam from 'section/vietnam/Vietnam'
import React, { useEffect, useState } from 'react'
import AboutUs from 'section/about-us/AboutUs'
import Coupang from 'section/coupang/Coupang'
import Footer from 'section/footer/Footer'
import Intro from 'section/intro/Intro'
import Location from 'section/location/Location'
import Newsroom from 'section/newroom/Newsroom'
import Process from 'section/process/Process'
import Recruitment from 'section/recruitment/Recruitment'
import SoftwareDevelopment from 'section/sw/SoftwareDevelopment'

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
        <Intro openDialog={openDialog} />
      </section>
      <Hidden lgUp>
        <SmDownScrollTop />
      </Hidden>
      <section id='aboutUs'>
        <AboutUs />
      </section>
      <section id='software'>
        <SoftwareDevelopment />
      </section>
      <section id='process'>
        <Process />
      </section>
      <section id='coupang'>
        <Coupang />
      </section>
      <section id='vietnam'>
        <Vietnam />
      </section>
      <section id='recruitment'>
        <Recruitment />
      </section>
      <section id='newsroom'>
        <Newsroom />
      </section>
      <section id='location'>
        <Location />
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
