import { Container } from '@material-ui/core'
import React from 'react'
import VietnamServiceGrayBox from './gray-box/VietnamServiceGrayBox'
import VietnamServiceStructure from './service-structure/VietnamServiceStructure'
import SonogramSteps from './sonogram-steps/SonogramSteps'

function VietnamServiceSubContent() {
  return (
    <div>
      <Container maxWidth="xl">
        <VietnamServiceGrayBox />
        <VietnamServiceStructure />
      </Container>
      <SonogramSteps />
    </div>
  )
}

export default VietnamServiceSubContent
