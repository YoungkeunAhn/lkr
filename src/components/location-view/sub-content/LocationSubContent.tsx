import { Box, Button, Container } from '@material-ui/core'
import { locationText } from 'assets/location-text'
import React from 'react'
import LocationMapView from './map-view/LocationMapView'
import useStyles from './styles'
import LocationTextRowBox from './text-row-box/LocationTextRowBox'

function LocationSubContent() {
  const classes = useStyles()
  return (
    <Container maxWidth="xl">
      <Box display="flex">
        <LocationMapView />
        <Box className={classes.right}>
          <Box display="flex" flexDirection="column">
            {locationText.map((item, idx) => (
              <LocationTextRowBox key={idx} {...item} />
            ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              size="large"
              className={classes.naverBtn}
            >
              NAVER 지도보기
            </Button>
            <Button
              variant="contained"
              size="large"
              className={classes.kakaoBtn}
            >
              KAKAO 지도보기
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default LocationSubContent
