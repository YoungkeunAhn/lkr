import { Box, Container } from '@material-ui/core'
import { recruitmentMainText2 } from 'assets/main-text'
import clsx from 'clsx'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import RecruitmentSubContentNoticePart from './notice-part/RecruitmentSubContentNoticePart'
import RecruitmentSubContentProcessPart from './process-part/RecruitmentSubContentProcessPart'
import useStyles from './styles'

function RecruitmentSubContent() {
  const classes = useStyles()

  return (
    <Box>
      <Box className={clsx(classes.bgPart, classes.topBg)}>
        <div className={classes.bgCover}></div>
      </Box>

      <Container maxWidth="xl">
        <TitleContentFrame
          title="신입 및 경력사원 공개채용"
          mainText={recruitmentMainText2}
        />
        <Container maxWidth="lg">
          <RecruitmentSubContentNoticePart />
          <RecruitmentSubContentProcessPart />
        </Container>
      </Container>

      <Box className={clsx(classes.bgPart, classes.bottomBg)}>
        <div className={classes.bgCover}></div>
      </Box>
    </Box>
  )
}

export default RecruitmentSubContent
