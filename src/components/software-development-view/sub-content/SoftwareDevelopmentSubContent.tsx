import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { sdItemList } from 'assets/sd-sub-items'
import BackgroundCover from 'commons/background-cover/BackgroundCover'
import React from 'react'
import SoftwareDevelopmentItemBox from './item-box/SoftwareDevelopmentItemBox'
import useStyles from './styles'

const bgText1 = 'WE ARE CREATIVE'
const bgText2 = 'AND PASSIONATE'

function SoftwareDevelopmentSubContent() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <BackgroundCover noBg={smDown ? true : undefined}>
        <Container maxWidth='lg'>
          <Box className={classes.wrapper}>
            <Hidden mdDown>
              <Box className={classes.bgText}>
                <Typography variant='h1' align='center'>
                  {bgText1}
                </Typography>
                <Typography variant='h1' align='center'>
                  {bgText2}
                </Typography>
              </Box>
            </Hidden>
            <Box className={classes.itemListBox}>
              <Grid
                container
                justifyContent='space-between'
                alignItems='stretch'
                spacing={mdDown ? 1 : 4}
              >
                {sdItemList.map((item, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <SoftwareDevelopmentItemBox idx={idx} sdItem={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </BackgroundCover>
    </Box>
  )
}

export default SoftwareDevelopmentSubContent
