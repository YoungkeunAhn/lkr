import { Box, Container, useMediaQuery, useTheme } from '@material-ui/core'
import {
  recruitmentMainText2,
  smDownRecruitmentMainText2,
} from 'assets/main-text'
import clsx from 'clsx'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import React from 'react'
import RecruitmentSubContentNoticePart from './notice-part/RecruitmentSubContentNoticePart'
import RecruitmentSubContentProcessPart from './process-part/RecruitmentSubContentProcessPart'
import useStyles from './styles'

function RecruitmentSubContent() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box>
      <div id='blackBg5'>
        <Box className={clsx(classes.bgPart, classes.topBg)}>
          <div className={classes.bgCover}></div>
        </Box>
      </div>

      <Container maxWidth='lg'>
        <TitleContentFrame
          title='신입 및 경력사원 공개채용'
          mainText={recruitmentMainText2}
          smDownMainText={smDownRecruitmentMainText2}
        />
        <Box pl={mdDown && 4} pr={mdDown && 4}>
          <Container maxWidth='lg'>
            <RecruitmentSubContentNoticePart />
            <RecruitmentSubContentProcessPart />
          </Container>
        </Box>
      </Container>
      <div id='blackBg6'>
        <Box className={clsx(classes.bgPart, classes.bottomBg)}>
          <div className={classes.bgCover}></div>
        </Box>
      </div>
    </Box>
  )
}

export default RecruitmentSubContent
