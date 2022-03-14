import { Box, Container, Typography } from '@material-ui/core'
import { recruitmentMainText } from 'assets/main-text'
import { recruitmentSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import useStyles from './stlyes'
import RecruitmentSubContent from './sub-content/RecruitmentSubContent'

function RecruitmentView() {
  const classes = useStyles()

  return (
    <Box>
      <TitleContentFrame title='recruitment' mainText={recruitmentMainText}>
        <Container>
          <Box className={classes.subTextWrapper}>
            <Box className={classes.subTextBox}>
              {recruitmentSubText.map((text, idx) => (
                <Typography key={idx} variant='h6'>
                  {text}
                </Typography>
              ))}
            </Box>
            <Box className={classes.imgBox}>
              <img src='recruitment_image1.png' alt='recruitment lkr' />
            </Box>
          </Box>
        </Container>
      </TitleContentFrame>
      <RecruitmentSubContent />
    </Box>
  )
}

export default RecruitmentView
