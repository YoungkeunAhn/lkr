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
    <div>
      <TitleContentFrame
        title='newsroom'
        mainText={[`<span>2021년 12월</span> 엘케이알 뉴스`]}
        subText={newsroomSubText}
      />
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          {newsItem.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={6} lg={3} xl={3}>
              <NewsroomItemCard {...item} />
            </Grid>
          ))}
        </Grid>
        <Button variant='contained' className={classes.btn}>
          LRK 소식 모아보기
        </Button>
      </Container>
    </div>
  )
}

export default NewsroomView
