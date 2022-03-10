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
  const [currentMenu, setCurrentMenu] = useState<string>('home')
  const [isBgWhite, setIsBgWhite] = useState<boolean>(false)

  const onClickMenu = (menu: string, offsetY: number) => {
    setCurrentMenu(menu)
    window.scrollTo({ behavior: 'smooth', top: offsetY })
  }

  const handleScroll = () => {
    window.addEventListener('scroll', function (e) {
      console.log(this.window.scrollY)

      if (this.window.scrollY > 0 && this.window.scrollY < 349) {
        setIsBgWhite(false)
      } else if (this.window.scrollY > 350 && this.window.scrollY < 1199) {
        setIsBgWhite(true)
      } else if (this.window.scrollY > 1200 && this.window.scrollY < 2099) {
        setIsBgWhite(false)
      } else if (this.window.scrollY > 2100 && this.window.scrollY < 2799) {
        setIsBgWhite(true)
      } else if (this.window.scrollY > 2800 && this.window.scrollY < 3799) {
        setIsBgWhite(false)
      } else if (this.window.scrollY > 3800 && this.window.scrollY < 9699) {
        setIsBgWhite(true)
      } else if (this.window.scrollY > 9700 && this.window.scrollY < 10399) {
        setIsBgWhite(false)
      } else if (this.window.scrollY > 10400 && this.window.scrollY < 11399) {
        setIsBgWhite(true)
      } else if (this.window.scrollY > 11400 && this.window.scrollY < 11899) {
        setIsBgWhite(false)
      } else if (this.window.scrollY > 11900 && this.window.scrollY < 11999) {
        setIsBgWhite(false)
      } else if (this.window.scrollY > 12000 && this.window.scrollY < 13399) {
        setIsBgWhite(true)
      } else if (this.window.scrollY > 13400 && this.window.scrollY < 13899) {
        setIsBgWhite(false)
      } else if (this.window.scrollY > 13900) {
        setIsBgWhite(true)
      }
    })
  }

  useEffect(() => {
    handleScroll()
  }, [isBgWhite])

  return (
    <div>
      <MainView />
      <AboutUsView />
      <SoftwareDevelopmentView />
      <ProcessView />
      <CoupangServiceView />
      <VietnamServiceView />
      <RecruitmentView />
      <NewsroomView />
      <LocationView />
      <Footer />
      <Hidden smDown>
        <NavBar
          currentMenu={currentMenu}
          onClick={onClickMenu}
          isBgWhite={isBgWhite}
        />
      </Hidden>
    </div>
  )
}

export default App
