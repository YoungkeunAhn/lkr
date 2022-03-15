import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { vietnamHospitalText } from 'assets/vietnam-item'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'

function VietnamServiceGrayBox() {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Box className={classes.leftInnerBox}>
          <div>
            <Box className={classes.smallSquare}>
              <div className={classes.hospital1}>
                <img src='vhss_hospital_1.png' alt='hospital icon' />
                <Typography variant='body1'>제휴병원</Typography>
              </div>
              <img
                src='coil_arrow_1.png'
                alt='coil arrow'
                className={clsx(classes.coilArrow, classes.leftTopArrow)}
              />
            </Box>
            <Box className={classes.smallSquare}>
              <div className={classes.hospital2}>
                <img src='vhss_hospital_2.png' alt='hospital icon' />
                <Typography variant='body1'>제휴병원</Typography>
              </div>
              <img
                src='coil_arrow_1.png'
                alt='coil arrow'
                className={clsx(classes.coilArrow, classes.rightTopArrow)}
              />
            </Box>
          </div>

          <div>
            <Box className={classes.smallSquare}>
              <div className={classes.hospital3}>
                <img src='vhss_hospital_3.png' alt='hospital icon' />
                <Typography variant='body1'>제휴병원</Typography>
              </div>
              <img
                src='coil_arrow_1.png'
                alt='coil arrow'
                className={clsx(classes.coilArrow, classes.leftBottomArrow)}
              />
            </Box>
            <Box className={classes.smallSquare}>
              <div className={classes.hospital4}>
                <img src='vhss_hospital_4.png' alt='hospital icon' />
                <Typography variant='body1'>제휴병원</Typography>
              </div>
              <img
                src='coil_arrow_1.png'
                alt='coil arrow'
                className={clsx(classes.coilArrow, classes.rightBottomArrow)}
              />
            </Box>
          </div>
        </Box>
        <Box className={classes.circle}>
          <Typography variant={smDown ? 'body1' : 'h6'}>Big Data</Typography>
          <img src='big_data_icon.png' alt='data server icon' />
        </Box>
      </Box>
      <Box className={classes.right}>
        <ul className={classes.textList}>
          {vietnamHospitalText.map((text, idx) => (
            <li key={idx}>
              <Typography>{text}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  )
}

export default VietnamServiceGrayBox
