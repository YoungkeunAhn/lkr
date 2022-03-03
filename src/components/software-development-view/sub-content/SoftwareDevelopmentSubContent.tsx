import { Box, Container, Grid, Typography } from '@material-ui/core'
import { sdItemList } from 'assets/sd-sub-items'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import SoftwareDevelopmentItemBox from './item-box/SoftwareDevelopmentItemBox'
import useStyles from './styles'

const bgText1 = 'WE ARE CREATIVE'
const bgText2 = 'AND PASSIONATE'

function SoftwareDevelopmentSubContent() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <BackgroundCover>
        <Container maxWidth="xl">
          <Box className={classes.bgText}>
            <Typography variant="h1" align="center">
              {bgText1}
            </Typography>
            <Typography variant="h1" align="center">
              {bgText2}
            </Typography>
          </Box>
          <Box className={classes.itemListBox}>
            <Grid container justifyContent="space-between" spacing={10}>
              {sdItemList.map((item, idx) => (
                <Grid key={idx} item xs={6} sm={6} lg={3} xl={3}>
                  <SoftwareDevelopmentItemBox key={idx} sdItem={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </BackgroundCover>
    </Box>
  )
}

export default SoftwareDevelopmentSubContent
