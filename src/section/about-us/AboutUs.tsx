import { useMediaQuery, useTheme } from '@material-ui/core'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import { aboutUsMainText, smDownAboutUsMainText } from 'data/main-text'
import { aboutUsSubText, smDownAboutUsSubText } from 'data/sub-text'
import React from 'react'
import AboutUsContent from '../../components/about-us/AboutUsContent'
import AboutUsSmDownContent from '../../components/about-us/smdown-content/AboutUsSmDownContent'

function AboutUs() {
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
        <AboutUsSmDownContent />
      ) : (
        <div id='blackBg2'>
          <AboutUsContent />
        </div>
      )}
    </div>
  )
}

export default AboutUs
