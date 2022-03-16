import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import {
  smDownSoftwareDevelopmentMainText,
  softwareDevelopmentMainText,
} from 'assets/main-text'
import { softwareDevelopmentSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import SoftwareDevelopmentSubContent from './sub-content/SoftwareDevelopmentSubContent'

function SoftwareDevelopmentView() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box>
      <div>
        <TitleContentFrame
          title='software development'
          mainText={softwareDevelopmentMainText}
          subText={softwareDevelopmentSubText}
          smDownMainText={smDownSoftwareDevelopmentMainText}
          background={smDown ? '#f5f5f5' : '#fff'}
        />
      </div>
      <div id='blackBg3'>
        <SoftwareDevelopmentSubContent />
      </div>
    </Box>
  )
}

export default SoftwareDevelopmentView
