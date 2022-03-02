import { coupangServiceMainText } from 'assets/main-text'
import { coupangServiceSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'

function CoupangServiceView() {
  return (
    <div>
      <TitleContentFrame
        title="coupang solution service"
        mainText={coupangServiceMainText}
        subText={coupangServiceSubText}
      />
    </div>
  )
}

export default CoupangServiceView
