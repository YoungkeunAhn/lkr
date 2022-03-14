import { Container } from '@material-ui/core'
import React from 'react'
import VietnamServiceGrayBox from './gray-box/VietnamServiceGrayBox'
import VietnamServiceStructure from './service-structure/VietnamServiceStructure'

function VietnamServiceSubContent() {
  return (
    <div>
      <Container maxWidth='xl'>
        <VietnamServiceGrayBox />
        <VietnamServiceStructure />
      </Container>
    </div>
  )
}

export default VietnamServiceSubContent
