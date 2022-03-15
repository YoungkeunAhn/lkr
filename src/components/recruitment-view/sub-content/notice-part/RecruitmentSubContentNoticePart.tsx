import {
  Box,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import { recruitmentNoticeText } from 'assets/recruitment-notice-text'
import React from 'react'
import useStyles from './styles'

function RecruitmentSubContentNoticePart() {
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <Hidden mdUp>
        <Box className={classes.smDownMainImgBox}>
          <img src='recruitment_image2.png' alt='recruitment' />
        </Box>
      </Hidden>
      <Box className={classes.textPart}>
        <Typography
          variant='h5'
          className={classes.subTitle}
          align={smDown ? 'center' : 'left'}
        >
          채용안내
        </Typography>
        <Box>
          {recruitmentNoticeText.map((item, idx) => (
            <Box key={idx} className={classes.textBox} display='flex'>
              <Typography
                variant={smDown ? 'body2' : 'h6'}
                className={classes.itemTitle}
              >
                {item.title}
              </Typography>
              <Box className={classes.lineBox}>
                {item.text.split('/').map((line, idx) => (
                  <Typography variant={smDown ? 'body2' : 'h6'} key={idx}>
                    {line}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Hidden smDown>
        <Box className={classes.mainImgBox}>
          <img src='recruitment_image2.png' alt='recruitment' />
        </Box>
      </Hidden>
    </Box>
  )
}

export default RecruitmentSubContentNoticePart
