import { aboutUsMainText, smDownAboutUsMainText } from 'assets/main-text'
import { aboutUsSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import AboutUsSubContent from './sub-content/AboutUsSubContent'

function AboutUsView() {
  return (
    <div>
      <TitleContentFrame
        title='about us'
        mainText={aboutUsMainText}
        subText={aboutUsSubText}
        smDownMainText={smDownAboutUsMainText}
      />
      <div id='blackBg2'>
        <AboutUsSubContent />
      </div>
    </div>
  )
}

export default AboutUsView
