import { locationMainText } from 'assets/main-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'

function LocationView() {
  return (
    <div>
      <TitleContentFrame title="location" mainText={locationMainText} />
    </div>
  )
}

export default LocationView
