import { useMediaQuery, useTheme } from '@material-ui/core'
import {
  coupangServiceMainText,
  smDownCoupangServiceMainText,
} from 'assets/main-text'
import {
  coupangServiceSubText,
  smDownCoupangServiceSubText,
} from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import CoupangSubContent from './sub-content/CoupangSubContent'

function CoupangServiceView() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div style={{ background: '#F6F6F6' }}>
      <TitleContentFrame
        title='coupang solution service'
        mainText={coupangServiceMainText}
        subText={coupangServiceSubText}
        smDownMainText={smDownCoupangServiceMainText}
        smDownSubText={smDownCoupangServiceSubText}
        noBottomPadding={smDown ? true : undefined}
      />
      <CoupangSubContent />
    </div>
  )
}

export default CoupangServiceView
