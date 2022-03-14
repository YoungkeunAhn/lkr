import { Button, Container, Grid } from '@material-ui/core'
import { newsItem } from 'assets/news-item'
import { newsroomSubText } from 'assets/sub-text'
import TitleContentFrame from 'commons/title-content-box/TitleContentFrame'
import React from 'react'
import NewsroomItemCard from './item-card/NewsroomItemCard'
import useStyles from './styles'

function NewsroomView() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TitleContentFrame
        title='newsroom'
        mainText={[`<span>2021년 12월</span> 엘케이알 뉴스`]}
        subText={newsroomSubText}
      />
      <Container maxWidth='lg'>
        <Grid container spacing={4} alignItems='stretch'>
          <Grid item xs={12} sm={12} lg={6} xl={6}>
            <NewsroomItemCard {...newsItem[1]} isRight={false} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} xl={6}>
            <Grid
              container
              spacing={4}
              alignItems='center'
              justifyContent='space-between'
            >
              {newsItem.map(
                (item, idx) =>
                  idx !== 0 && (
                    <Grid item key={idx} xs={12} sm={12} lg={6} xl={6}>
                      <NewsroomItemCard {...item} isRight={true} />
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
        </Grid>
        <Button variant='contained' className={classes.btn}>
          LRK 소식 모아보기
        </Button>
      </Container>
    </div>
  )
}

export default NewsroomView
