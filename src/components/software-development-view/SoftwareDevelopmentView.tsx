import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import {
  smDownSoftwareDevelopmentMainText,
  softwareDevelopmentMainText,
} from 'data/main-text'
import { softwareDevelopmentSubText } from 'data/sub-text'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
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
          background={smDown ? '#f6f6f6' : '#fff'}
        />
      </div>
      <div id='blackBg3'>
        <SoftwareDevelopmentSubContent />
      </div>
    </Box>
  )
}

export default SoftwareDevelopmentView
