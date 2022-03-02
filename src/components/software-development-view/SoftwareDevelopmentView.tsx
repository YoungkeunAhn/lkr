import { Box } from '@material-ui/core'
import { softwareDevelopmentMainText } from 'assets/main-text'
import { softwareDevelopmentSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import SoftwareDevelopmentSubContent from './sub-content/SoftwareDevelopmentSubContent'

function SoftwareDevelopmentView() {
  return (
    <Box>
      <TitleContentFrame
        title="software development"
        mainText={softwareDevelopmentMainText}
        subText={softwareDevelopmentSubText}
      />
      <SoftwareDevelopmentSubContent />
    </Box>
  )
}

export default SoftwareDevelopmentView
