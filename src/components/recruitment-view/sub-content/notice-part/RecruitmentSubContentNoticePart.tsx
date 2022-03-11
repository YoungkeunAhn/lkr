import { Box, Typography } from '@material-ui/core'
import { recruitmentNoticeText } from 'assets/recruitment-notice-text'
import React from 'react'
import useStyles from './styles'

function RecruitmentSubContentNoticePart() {
  const classes = useStyles()

  return (
    <Box className={classes.noticeBox}>
      <Box className={classes.textPart}>
        <Typography variant='h5' className={classes.subTitle}>
          채용안내
        </Typography>
        <Box>
          {recruitmentNoticeText.map((item, idx) => (
            <Box key={idx} className={classes.textBox} display='flex'>
              <Typography variant='h6' className={classes.itemTitle}>
                {item.title}
              </Typography>
              <Box>
                {item.text.split('/').map((line, idx) => (
                  <Typography variant='h6' key={idx}>
                    {line}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.mainImgBox}>
        <img src='recruitment_image2.png' alt='recruitment' />
      </Box>
    </Box>
  )
}

export default RecruitmentSubContentNoticePart
