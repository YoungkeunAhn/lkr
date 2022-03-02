import AboutUsView from 'components/about-us-view/AboutUsView'
import CoupangServiceView from 'components/coupang-service-view/CoupangServiceView'
import MainView from 'components/main-view/MainView'
import NavBar from 'components/nav-bar/NavBar'
import ProcessView from 'components/process-view/ProcessView'
import RecruitmentView from 'components/recruitment-view/RecruitmentView'
import SoftwareDevelopmentView from 'components/software-development-view/SoftwareDevelopmentView'
import VietnamServiceView from 'components/vietnam-service-view/VietnamServiceView'
import React, { useState } from 'react'

function App() {
  const [currentMenu, setCurrentMenu] = useState<string>('home')

  const onClickMenu = (menu: string) => {
    setCurrentMenu(menu)
  }

  return (
    <div>
      <MainView />
      <AboutUsView />
      <SoftwareDevelopmentView />
      <ProcessView />
      <CoupangServiceView />
      <VietnamServiceView />
      <RecruitmentView />
      <NavBar currentMenu={currentMenu} onClick={onClickMenu} />
    </div>
  )
}

export default App
