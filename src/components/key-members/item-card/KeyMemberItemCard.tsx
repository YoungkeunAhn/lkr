import { Box, Typography } from '@material-ui/core'
import { KeyMemberType } from 'data/key-member'
import React from 'react'
import useStyles from './styles'

type Props = {
  member: KeyMemberType
}

function KeyMemberItemCard(props: Props) {
  const classes = useStyles()
  const { member } = props
  const { jobPosition, image, name, resume } = member

  return (
    <Box className={classes.root}>
      <Box className={classes.imgBox}>
        <img src={image} alt={name} />
      </Box>
      <Typography
        variant='body1'
        align='center'
        className={classes.jobPosition}
      >
        {jobPosition}
      </Typography>
      <Typography variant='body2' align='center' className={classes.name}>
        {name}
      </Typography>
    </Box>
  )
}

export default KeyMemberItemCard
