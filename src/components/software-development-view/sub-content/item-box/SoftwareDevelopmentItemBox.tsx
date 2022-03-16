import { Box, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { SdItemType } from 'assets/sd-sub-items'
import React from 'react'
import useStyles from './styles'

type Props = {
  sdItem: SdItemType
  idx: number
}

function SoftwareDevelopmentItemBox(props: Props) {
  const { sdItem, idx } = props
  const { icon, title, items } = sdItem
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root}>
      <Box className={classes.itemCircle}>
        <img
          src={icon}
          alt='service development intro icon'
          width={idx === 0 ? '90%' : '70%'}
          height={idx === 0 ? '90%' : '70%'}
        />
      </Box>
      <Typography>{title}</Typography>
      <Box mt={2}>
        {items.map((text, idx) => (
          <Typography variant='body2' key={idx}>
            - {text}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default SoftwareDevelopmentItemBox
