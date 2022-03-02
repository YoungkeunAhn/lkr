import { newsroomSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'

function NewsroomView() {
  return (
    <div>
      <TitleContentFrame
        title="newsroom"
        mainText={[`<span>2021년 12월</span> 엘케이알 뉴스`]}
        subText={newsroomSubText}
      />
    </div>
  )
}

export default NewsroomView
