import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { processItemList } from 'assets/process-items'
import ClickPointerBtn from 'commons/click-pointer-btn/ClickPointerBtn'
import React from 'react'
import ProcessItemBox from './item-box/ProcessItemBox'
import useStyles from './styles'

function ProcessSubContent() {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const onClickBtn = () => {}

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Typography align='center' className={classes.bgText}>
        PROCESS
      </Typography>
      <Box className={classes.moveTopBox}>
        <Grid
          container
          justifyContent={smDown ? 'center' : 'space-between'}
          alignItems={smDown ? 'stretch' : 'center'}
          spacing={smDown ? 0 : 4}
          style={{ zIndex: 200 }}
        >
          {processItemList.map((item, idx) => (
            <Grid item xs={12} sm={6} lg={6} xl={4} key={idx}>
              <Box display='flex' justifyContent='center'>
                <ProcessItemBox seq={idx + 1} {...item}></ProcessItemBox>
              </Box>
            </Grid>
          ))}
        </Grid>
        <ClickPointerBtn title='견적문의하기' onClick={onClickBtn} />
      </Box>
    </Container>
  )
}

export default ProcessSubContent
