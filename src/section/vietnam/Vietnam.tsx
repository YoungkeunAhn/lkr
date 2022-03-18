import { useMediaQuery, useTheme } from '@material-ui/core'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import SmDownSonogramSteps from 'components/vietnam-service-view/smdown-sonogram-steps/SmDownSonogramSteps'
import SonogramSteps from 'components/vietnam-service-view/sonogram-steps/SonogramSteps'
import VietnamContent from 'components/vietnam-service-view/VietnamContent'
import { vietnamServiceMainText } from 'data/main-text'
import { vietnamServiceSubText } from 'data/sub-text'
import React from 'react'

function Vietnam() {
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
      <VietnamContent />

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

export default Vietnam
