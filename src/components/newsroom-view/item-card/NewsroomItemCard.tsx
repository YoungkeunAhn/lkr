import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
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
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className={classes.root}>
      <Box
        className={classes.header}
        style={{ height: !isRight ? 120 : undefined }}
      >
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
          variant={isRight ? 'h6' : mdDown ? 'h6' : 'h5'}
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography variant='caption' className={classes.tag}>
          {tags}
        </Typography>
      </Box>
      <Box className={clsx(classes.thumbnail, isRight && classes.right)}>
        <img src={image || 'noImage.png'} alt='thumbnail' />
      </Box>
    </Box>
  )
}

export default NewsroomItemCard
