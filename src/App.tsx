import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import TitleContentFrame from './commons/title-content-box/TitleContentFrame'
import MainView from 'components/main-view/MainView'
import NavBar from 'components/nav-bar/NavBar'

function App() {
  const [currentMenu, setCurrentMenu] = useState<string>('home')

  const onClickMenu = (menu: string) => {
    setCurrentMenu(menu)
  }

  return (
    <div>
      <NavBar currentMenu={currentMenu} onClick={onClickMenu} />
      <MainView />
      <TitleContentFrame title="about us">
        <Box style={{ border: '1px solid black' }}>
          <Typography variant="h3">ㅎㅎㅎㅎㅎ</Typography>
        </Box>
      </TitleContentFrame>
    </div>
  )
}

export default App
