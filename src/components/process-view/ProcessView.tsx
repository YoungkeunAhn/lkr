import { processMainText, smDownProcessMainText } from 'assets/main-text'
import { processSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import ProcessSubContent from './sub-content/ProcessSubContent'

function ProcessView() {
  return (
    <div>
      <TitleContentFrame
        title='process'
        mainText={processMainText}
        subText={processSubText}
        smDownMainText={smDownProcessMainText}
      />
      <ProcessSubContent />
    </div>
  )
}

export default ProcessView
