import { Box, Typography } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  icon: string
}

function RecruitmentProcessIconBox(props: Props) {
  const { title, icon } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.circle}>
        <img src={icon} alt="recruitment process icon" />
      </Box>
      <Typography variant="h6" align="center" className={classes.title}>
        {title}
      </Typography>
    </Box>
  )
}

export default RecruitmentProcessIconBox
