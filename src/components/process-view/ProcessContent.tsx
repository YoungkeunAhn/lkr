import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import ClickPointerBtn from 'commons/click-pointer-btn/ClickPointerBtn'
import { processItemList } from 'data/process-items'
import React from 'react'
import ProcessItemBox from './item-box/ProcessItemBox'
import useStyles from './styles'

function ProcessContent() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const onClickBtn = () => {}

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Box pl={mdDown && !smDown && 4} pr={mdDown && !smDown && 4}>
        <Hidden mdDown>
          <Typography align='center' className={classes.bgText}>
            PROCESS
          </Typography>
        </Hidden>
        <Box className={classes.moveTopBox}>
          <Grid
            container
            justifyContent={smDown ? 'center' : 'space-between'}
            alignItems={smDown ? 'stretch' : 'center'}
            spacing={smDown ? 2 : 4}
            style={{ zIndex: 200 }}
          >
            {processItemList.map((item, idx) => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={idx}>
                <ProcessItemBox seq={idx + 1} {...item}></ProcessItemBox>
              </Grid>
            ))}
          </Grid>
          <ClickPointerBtn title='견적문의하기' onClick={onClickBtn} />
        </Box>
      </Box>
    </Container>
  )
}

export default ProcessContent
