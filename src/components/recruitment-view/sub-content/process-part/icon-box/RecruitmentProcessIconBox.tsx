import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  icon: string
}

function RecruitmentProcessIconBox(props: Props) {
  const { title, icon } = props
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className={classes.root}>
      <Box className={classes.imgBox}>
        <img src={icon} alt='recruitment process icon' />
      </Box>
      <Typography
        align='center'
        className={classes.title}
        variant={mdDown ? 'body2' : 'body1'}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default RecruitmentProcessIconBox
