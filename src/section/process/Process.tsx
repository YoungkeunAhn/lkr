import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import ProcessContent from 'components/process/ProcessContent'
import { processMainText, smDownProcessMainText } from 'data/main-text'
import { processSubText } from 'data/sub-text'
import React from 'react'

function Process() {
  return (
    <div>
      <TitleContentFrame
        title='process'
        mainText={processMainText}
        subText={processSubText}
        smDownMainText={smDownProcessMainText}
      />
      <ProcessContent />
    </div>
  )
}

export default Process
