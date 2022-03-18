import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import LocationContent from 'components/location/LocationContent'
import { locationMainText } from 'data/main-text'
import React from 'react'

function Location() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box mb={smDown ? 5 : 10}>
      <TitleContentFrame
        title='location'
        mainText={locationMainText}
        smDownMainText={locationMainText[0]}
        noBottomPadding
        background={smDown ? '#f6f6f6' : '#fff'}
      />
      <LocationContent />
    </Box>
  )
}

export default Location
