import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React from 'react'
import useStyles from './styles'

type Props = {
  category: string
  title: string
  tags: string
  image: string
}

function NewsroomItemCard(props: Props) {
  const { category, title, tags, image } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Box className={classes.topBox}>
          <Box className={classes.leftBox}>
            <Box className={classes.talkIcon}>
              <img src='talk_icon.png' alt='newsroom talk icon' />
            </Box>
            <Typography
              variant='body2'
              className={classes.category}
              align='center'
            >
              {category}
            </Typography>
          </Box>
          <IconButton size='small'>
            <MoreVertIcon fontSize='small' />
          </IconButton>
        </Box>
        <Typography variant='body1' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='caption' className={classes.tag}>
          {tags}
        </Typography>
      </Box>
      <Box className={classes.thumbnail}>
        <img src={image} alt='thumbnail' />
      </Box>
    </Box>
  )
}

export default NewsroomItemCard
