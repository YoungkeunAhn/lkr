import {
  Box,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import NewsroomItemCard from 'components/newsroom-view/item-card/NewsroomItemCard'
import { newsItem } from 'data/news-item'
import { newsroomSubText } from 'data/sub-text'
import React from 'react'
import useStyles from './styles'

function Newsroom() {
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={classes.root}>
      <TitleContentFrame
        title='newsroom'
        mainText={[`<span>2021년 12월</span> 엘케이알 뉴스`]}
        subText={newsroomSubText}
        smDownMainText={`<span>2021년 12월</span> 엘케이알 뉴스`}
        noBottomPadding={smDown ? true : undefined}
      />
      <Container maxWidth='lg'>
        <Box pl={mdDown && !smDown && 4} pr={mdDown && !smDown && 4}>
          <Grid container spacing={2} alignItems='stretch'>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              {!mdDown && <NewsroomItemCard {...newsItem[1]} isRight={false} />}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Grid
                container
                spacing={2}
                alignItems='center'
                justifyContent='space-between'
              >
                {newsItem.map((item, idx) =>
                  smDown ? (
                    <Grid item key={idx} xs={12} sm={12} lg={6} xl={6}>
                      <NewsroomItemCard {...item} isRight={true} />
                    </Grid>
                  ) : (
                    idx !== 0 && (
                      <Grid item key={idx} xs={12} sm={12} md={6} lg={6} xl={6}>
                        <NewsroomItemCard {...item} isRight={true} />
                      </Grid>
                    )
                  )
                )}
              </Grid>
            </Grid>
          </Grid>
          <Button variant='contained' className={classes.btn}>
            LRK 소식 모아보기
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default Newsroom
