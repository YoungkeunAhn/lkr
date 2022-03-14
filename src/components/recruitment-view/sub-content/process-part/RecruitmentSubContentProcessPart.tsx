import { Box, Typography } from '@material-ui/core'
import { recruitmentProcess } from 'assets/recruitment-notice-text'
import React from 'react'
import RecruitmentProcessIconBox from './icon-box/RecruitmentProcessIconBox'
import useStyles from './styles'

function RecruitmentSubContentProcessPart() {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant='h5' className={classes.subTitle}>
        전형 프로세스
      </Typography>
      <Box className={classes.processListBox}>
        {recruitmentProcess.map((item, idx) => (
          <div key={idx}>
            <Box display='flex' alignItems='center'>
              <RecruitmentProcessIconBox {...item} />
            </Box>
            {idx !== recruitmentProcess.length - 1 && (
              <Typography className={classes.gt} variant='h2'>
                &gt;
              </Typography>
            )}
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default RecruitmentSubContentProcessPart
