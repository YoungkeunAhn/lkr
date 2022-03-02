import { vietnamServiceMainText } from 'assets/main-text'
import { vietnamServiceSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'

function VietnamServiceView() {
  return (
    <div>
      <TitleContentFrame
        title="vietnam hospital solution service"
        mainText={vietnamServiceMainText}
        subText={vietnamServiceSubText}
      />
    </div>
  )
}

export default VietnamServiceView
