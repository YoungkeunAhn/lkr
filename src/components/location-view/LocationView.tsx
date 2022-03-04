import { Box } from '@material-ui/core'
import { locationMainText } from 'assets/main-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import LocationSubContent from './sub-content/LocationSubContent'

function LocationView() {
  return (
    <Box mb={10}>
      <TitleContentFrame title="location" mainText={locationMainText} />
      <LocationSubContent />
    </Box>
  )
}

export default LocationView
