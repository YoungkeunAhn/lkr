import { useMediaQuery, useTheme } from '@material-ui/core'
import { aboutUsMainText, smDownAboutUsMainText } from 'assets/main-text'
import { aboutUsSubText, smDownAboutUsSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import React from 'react'
import AboutUsSubContent from './sub-content/AboutUsSubContent'
import AboutUsSmDownSubContent from './smdown-sub-content/AboutUsSmDownSubContent'

function AboutUsView() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      <TitleContentFrame
        title='about us'
        mainText={aboutUsMainText}
        subText={aboutUsSubText}
        smDownMainText={smDownAboutUsMainText}
        smDownSubText={smDownAboutUsSubText}
      />
      {smDown ? (
        <AboutUsSmDownSubContent />
      ) : (
        <div id='blackBg2'>
          <AboutUsSubContent />
        </div>
      )}
    </div>
  )
}

export default AboutUsView
