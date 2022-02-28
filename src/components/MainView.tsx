import { Box, Typography } from '@material-ui/core'
import { mainSubText } from 'assets/sub-text-assets'
import React from 'react'

function MainView() {
  return (
    <Box>
      <Box>
        <Typography variant="body2">LKR corpration</Typography>
      </Box>
      <Box>
        {mainSubText.map((text, idx) => (
          <Typography key={idx} variant="h5">
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default MainView
