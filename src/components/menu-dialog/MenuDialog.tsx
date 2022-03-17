import {
  Box,
  ButtonBase,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { navMenu } from 'data/nav-menu'
import React from 'react'
import useStyles from './styles'

type Props = {
  open: boolean
  onClose: () => void
}

function MenuDialog(props: Props) {
  const { open, onClose } = props
  const classes = useStyles()

  const onClickMenu = (sectionId: string) => {
    const currentSection = document.getElementById(sectionId)
    window.scrollTo({ behavior: 'smooth', top: currentSection?.offsetTop })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullScreen className={classes.root}>
      <Box className={classes.title}>
        <Box className={classes.titleLogo}>
          <Box className={classes.imgBox}>
            <img src='logo.png' alt='logo' />
          </Box>
          <Typography variant='body2'>LKR corpration</Typography>
        </Box>
        <IconButton onClick={onClose} className={classes.closeBtn}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent className={classes.content}>
        {navMenu.map((menu, idx) => (
          <ButtonBase
            key={idx}
            onClick={() => onClickMenu(menu.sectionId)}
            className={classes.btn}
          >
            <Typography variant='h5' className={classes.engTitle}>
              {menu.title}
            </Typography>
            <Typography variant='body2'>{menu.korTitle}</Typography>
          </ButtonBase>
        ))}
      </DialogContent>
    </Dialog>
  )
}

export default MenuDialog
