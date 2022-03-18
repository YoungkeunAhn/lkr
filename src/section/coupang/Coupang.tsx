import { useMediaQuery, useTheme } from '@material-ui/core'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import CoupangContent from 'components/coupang/CoupangContent'
import {
  coupangServiceMainText,
  smDownCoupangServiceMainText,
} from 'data/main-text'
import {
  coupangServiceSubText,
  smDownCoupangServiceSubText,
} from 'data/sub-text'
import React from 'react'

function Coupang() {
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
      <CoupangContent />
    </div>
  )
}

export default Coupang
