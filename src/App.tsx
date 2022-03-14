import { Hidden } from '@material-ui/core'
import AboutUsView from 'components/about-us-view/AboutUsView'
import CoupangServiceView from 'components/coupang-service-view/CoupangServiceView'
import Footer from 'components/footer/Footer'
import LocationView from 'components/location-view/LocationView'
import MainView from 'components/main-view/MainView'
import NavBar from 'components/nav-bar/NavBar'
import NewsroomView from 'components/newsroom-view/NewsroomView'
import ProcessView from 'components/process-view/ProcessView'
import RecruitmentView from 'components/recruitment-view/RecruitmentView'
import SoftwareDevelopmentView from 'components/software-development-view/SoftwareDevelopmentView'
import VietnamServiceView from 'components/vietnam-service-view/VietnamServiceView'
import React, { useEffect, useState } from 'react'

function App() {
  const [isBgBlack, setIsBgBlack] = useState<boolean>(true)

  const onClickMenu = (sectionId: string) => {
    const currentSection = document.getElementById(sectionId)
    window.scrollTo({ behavior: 'smooth', top: currentSection?.offsetTop })
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
          top: i !== 1 ? blackBgDom.offsetTop - 400 : blackBgDom.offsetTop,
          bottom: blackBgDom.offsetTop + blackBgDom.offsetHeight - 400,
        })
      }
    }

    console.log(offsetValue)

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
        <MainView />
      </section>
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
      <Hidden smDown>
        <NavBar onClick={onClickMenu} isBgBlack={isBgBlack} />
      </Hidden>
    </div>
  )
}

export default App
