import { Box, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  onClick: () => void
  paddingRight?: number
}

function ClickPointerBtn(props: Props) {
  const classes = useStyles()
  const { title, onClick, paddingRight } = props

  return (
    <Box display="flex" justifyContent="flex-end" pr={paddingRight}>
      <Box className={classes.btnPointerImgBox}>
        <img src="process_btn_pointer.png" alt="button click pointer" />
      </Box>
      <Button className={classes.btn} variant="contained" onClick={onClick}>
        {title}
      </Button>
    </Box>
  )
}

export default ClickPointerBtn
