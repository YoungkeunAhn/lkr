import { processMainText } from 'assets/main-text'
import { processSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import ProcessSubContent from './sub-content/ProcessSubContent'

function ProcessView() {
  return (
    <div>
      <TitleContentFrame
        title="process"
        mainText={processMainText}
        subText={processSubText}
      />
      <ProcessSubContent />
    </div>
  )
}

export default ProcessView
