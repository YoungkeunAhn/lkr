import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import { locationMainText } from 'assets/main-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import LocationSubContent from './sub-content/LocationSubContent'

function LocationView() {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box mb={smDown ? 5 : 10}>
      <TitleContentFrame
        title='location'
        mainText={locationMainText}
        smDownMainText={locationMainText[0]}
        noBottomPadding
      />
      <LocationSubContent />
    </Box>
  )
}

export default LocationView
