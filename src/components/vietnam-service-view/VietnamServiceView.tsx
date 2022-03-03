import { vietnamServiceMainText } from 'assets/main-text'
import { vietnamServiceSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import VietnamServiceSubContent from './sub-content/VietnamServiceSubContent'

function VietnamServiceView() {
  return (
    <div>
      <TitleContentFrame
        title="vietnam hospital solution service"
        mainText={vietnamServiceMainText}
        subText={vietnamServiceSubText}
      />
      <VietnamServiceSubContent />
    </div>
  )
}

export default VietnamServiceView
