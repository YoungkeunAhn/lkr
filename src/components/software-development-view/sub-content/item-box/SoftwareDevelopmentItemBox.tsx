import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
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
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
      <Typography variant={mdDown ? 'body2' : 'body1'}>{title}</Typography>
      <Box mt={2} display='flex' flexDirection='column'>
        {items.map((text, idx) => (
          <Typography
            variant={mdDown ? 'caption' : 'body2'}
            key={idx}
            className={classes.listLine}
          >
            - {text}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default SoftwareDevelopmentItemBox
