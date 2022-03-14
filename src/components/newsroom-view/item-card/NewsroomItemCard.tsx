import { Box, IconButton, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'

type Props = {
  category: string
  title: string
  tags: string
  image: string
  isRight: boolean
}

function NewsroomItemCard(props: Props) {
  const { category, title, tags, image, isRight } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.header} style={{ height: isRight ? 120 : 200 }}>
        <Box className={classes.topBox}>
          <Box className={classes.leftBox}>
            <Box className={classes.talkIcon}>
              <img src='talk_icon.png' alt='newsroom talk icon' />
            </Box>
            <Typography
              variant='caption'
              className={classes.category}
              align='center'
            >
              {category}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant={isRight ? 'body1' : 'h5'}
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant='caption' className={classes.tag}>
          {tags}
        </Typography>
      </Box>
      <Box className={clsx(classes.thumbnail, isRight && classes.right)}>
        <img src={image} alt='thumbnail' />
      </Box>
    </Box>
  )
}

export default NewsroomItemCard
