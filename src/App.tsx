import React from 'react'
import { Box, Typography } from '@material-ui/core'
import TitleContentFrame from './commons/title-content-box/TitleContentFrame'
import MainView from './components/MainView'

function App() {
  return (
    <div>
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
