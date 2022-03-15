import {
  coupangServiceMainText,
  smDownCoupangServiceMainText,
} from 'assets/main-text'
import { coupangServiceSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import CoupangSubContent from './sub-content/CoupangSubContent'

function CoupangServiceView() {
  return (
    <div style={{ background: '#F6F6F6' }}>
      <TitleContentFrame
        title='coupang solution service'
        mainText={coupangServiceMainText}
        subText={coupangServiceSubText}
        smDownMainText={smDownCoupangServiceMainText}
      />
      <CoupangSubContent />
    </div>
  )
}

export default CoupangServiceView
