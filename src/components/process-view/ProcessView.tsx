import { processMainText, smDownProcessMainText } from 'data/main-text'
import { processSubText } from 'data/sub-text'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
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
