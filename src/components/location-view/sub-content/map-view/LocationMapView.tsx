import React, { useEffect } from 'react'

function LocationMapView() {
  useEffect(() => {
    let map = new naver.maps.Map('map')

    map = new naver.maps.Map(document.createElement('div'))
    map.setMapTypeId(naver.maps.MapTypeId.HYBRID)
  }, [])

  return <div id="map" style={{ width: '100%', height: 300 }}></div>
}

export default LocationMapView
