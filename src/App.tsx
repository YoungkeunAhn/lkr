import AboutUsView from 'components/about-us-view/AboutUsView'
import MainView from 'components/main-view/MainView'
import NavBar from 'components/nav-bar/NavBar'
import SoftwareDevelopmentView from 'components/software-development-view/SoftwareDevelopmentView'
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
      <NavBar currentMenu={currentMenu} onClick={onClickMenu} />
    </div>
  )
}

export default App
