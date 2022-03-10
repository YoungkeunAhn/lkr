import { Box, Typography } from '@material-ui/core'
import { SdItemType } from 'assets/sd-sub-items'
import React from 'react'
import useStyles from './styles'

type Props = {
  sdItem: SdItemType
}

function SoftwareDevelopmentItemBox(props: Props) {
  const { sdItem } = props
  const { icon, title, items } = sdItem
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.itemCircle}>
        <img src={icon} alt='service development intro icon' />
      </Box>
      <Typography>{title}</Typography>
      <ul className={classes.itemList}>
        {items.map((text, idx) => (
          <li key={idx}>
            <Typography>{text}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default SoftwareDevelopmentItemBox
