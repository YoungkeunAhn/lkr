import { recruitmentMainText } from 'assets/main-text'
import { recruitmentSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'

function RecruitmentView() {
  return (
    <div>
      <TitleContentFrame
        title="recruitment"
        mainText={recruitmentMainText}
        subText={recruitmentSubText}
      />
    </div>
  )
}

export default RecruitmentView
