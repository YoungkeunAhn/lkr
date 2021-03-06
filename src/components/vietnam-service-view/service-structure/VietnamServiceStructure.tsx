import {
  Box,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

function VietnamServiceStructure() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <Typography
        variant={smDown ? 'h5' : mdDown ? 'h4' : 'h2'}
        align='center'
        className={classes.title}
      >
        <span>베트남 병원솔루션</span> {smDown && <br />}서비스 구조도
      </Typography>
      <Box className={classes.contentBox}>
        <Box className={classes.imgBox}>
          <img
            src={
              smDown
                ? 'recursion_structure_mobile.png'
                : 'recursion_structure_web.png'
            }
            alt='recursion struceture'
          />
        </Box>
        <Hidden mdDown>
          <Box className={classes.rightBox}>
            <div className={classes.rightText}>
              <Typography variant='h6' align='center'>
                구축된 DB 보험사와 연계
              </Typography>
            </div>
            <img src='coil_arrow_2.png' alt='right coil arrow' />
          </Box>
        </Hidden>
      </Box>
    </Box>
  )
}

export default VietnamServiceStructure
