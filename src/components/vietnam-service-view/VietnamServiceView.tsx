import { useMediaQuery, useTheme } from '@material-ui/core'
import { vietnamServiceMainText } from 'assets/main-text'
import { vietnamServiceSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import SmDownSonogramSteps from './sub-content/smdown-sonogram-steps/SmDownSonogramSteps'
import SonogramSteps from './sub-content/sonogram-steps/SonogramSteps'
import VietnamServiceSubContent from './sub-content/VietnamServiceSubContent'

function VietnamServiceView() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      <TitleContentFrame
        title='vietnam hospital solution service'
        mainText={vietnamServiceMainText}
        subText={vietnamServiceSubText}
        smDownMainText={vietnamServiceMainText[0]}
        noBottomPadding={smDown ? true : undefined}
      />
      <VietnamServiceSubContent />

      {smDown ? (
        <SmDownSonogramSteps />
      ) : (
        <div id='blackBg4'>
          <SonogramSteps />
        </div>
      )}
    </div>
  )
}

export default VietnamServiceView
