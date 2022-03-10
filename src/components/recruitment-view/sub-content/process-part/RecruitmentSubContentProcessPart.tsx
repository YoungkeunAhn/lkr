import { Box, Typography } from '@material-ui/core'
import { recruitmentProcess } from 'assets/recruitment-notice-text'
import React from 'react'
import RecruitmentProcessIconBox from './icon-box/RecruitmentProcessIconBox'
import useStyles from './styles'

function RecruitmentSubContentProcessPart() {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant='h4' className={classes.subTitle}>
        전형 프로세스
      </Typography>
      <Box className={classes.processListBox}>
        {recruitmentProcess.map((item, idx) => (
          <Box key={idx} display='flex'>
            <RecruitmentProcessIconBox {...item} />
            {idx !== recruitmentProcess.length - 1 && (
              <Typography className={classes.gt} variant='h1'>
                &gt;
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default RecruitmentSubContentProcessPart
