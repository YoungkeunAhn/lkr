import React, { useEffect } from 'react'

function LocationMapView() {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 15,
    }
    let map = new naver.maps.Map('map', mapOptions)

    map = new naver.maps.Map(document.createElement('div'))
    map.setMapTypeId(naver.maps.MapTypeId.HYBRID)
  }, [])

  return <div id="map" style={{ width: '100%', height: 300 }}></div>
}

export default LocationMapView
