import { Box, Container, useMediaQuery, useTheme } from '@material-ui/core'
import clsx from 'clsx'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import {
  recruitmentMainText2,
  smDownRecruitmentMainText2,
} from 'data/main-text'
import React from 'react'
import RecruitmentContentNoticePart from './notice-part/RecruitmentContentNoticePart'
import RecruitmentContentProcessPart from './process-part/RecruitmentContentProcessPart'
import useStyles from './styles'

function RecruitmentContent() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

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
        <Box pl={mdDown && !smDown && 4} pr={mdDown && !smDown && 4}>
          <Container maxWidth='lg'>
            <RecruitmentContentNoticePart />
            <RecruitmentContentProcessPart />
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

export default RecruitmentContent
