import { ButtonBase, Typography } from '@material-ui/core'
import { navMenu } from 'assets/nav-menu'
import clsx from 'clsx'
import React, { useState } from 'react'
import useStyles from './styles'

type Props = {
  currentMenu: string
  onClick: (menu: string, offsetY: number) => void
  isBgWhite: boolean
}

function NavBar(props: Props) {
  const classes = useStyles()
  const { currentMenu, onClick, isBgWhite } = props

  const onClickTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  return (
    <ul className={classes.root}>
      {navMenu.map((menu, idx) => (
        <li
          key={idx}
          className={clsx(
            classes.menuBox,
            !isBgWhite && classes.white,
            currentMenu === menu.title && classes.currentMenu
          )}
        >
          <ButtonBase onClick={() => onClick(menu.title, menu.offsetY)}>
            <Typography variant='body1'>{menu.title}</Typography>
            <span className={classes.circle}></span>
          </ButtonBase>
        </li>
      ))}
      <li className={clsx(classes.menuBox, classes.white)}>
        <ButtonBase onClick={onClickTop}>
          <Typography
            variant='body1'
            style={{ color: isBgWhite ? '#000' : '#fff' }}
          >
            TOP
          </Typography>
          <span className={classes.triangle}></span>
        </ButtonBase>
      </li>
    </ul>
  )
}

export default NavBar
