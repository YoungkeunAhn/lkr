import { Box, Container, Typography } from '@material-ui/core'
import { recruitmentMainText2 } from 'assets/main-text'
import { recruitmentNoticeText } from 'assets/recruitment-notice-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import useStyles from './styles'

function RecruitmentSubContent() {
  const classes = useStyles()

  return (
    <Box>
      <Box className={classes.bgPart}>
        <div className={classes.bgCover}></div>
      </Box>
      <Container maxWidth="xl">
        <TitleContentFrame
          title="신입 및 경력사원 공개채용"
          mainText={recruitmentMainText2}
        />
        <Box className={classes.noticeBox}>
          <Typography variant="h4">채용안내</Typography>
          <Box>
            {recruitmentNoticeText.map((item, idx) => (
              <Box key={idx} display="flex">
                <Typography>{item.title}</Typography>
                <Box>
                  {item.text.split('/').map((line, idx) => (
                    <Typography key={idx}>{line}</Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default RecruitmentSubContent
