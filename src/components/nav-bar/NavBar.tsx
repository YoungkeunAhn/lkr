import { ButtonBase, Typography } from '@material-ui/core'
import { navMenu } from 'assets/nav-menu'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'

type Props = {
  currentMenu: string
  onClick: (menu: string) => void
}

function NavBar(props: Props) {
  const classes = useStyles()
  const { currentMenu, onClick } = props

  return (
    <ul className={classes.root}>
      {navMenu.map((menu, idx) => (
        <li
          key={idx}
          className={clsx(
            classes.menuBox,
            classes.white,
            currentMenu === menu.title && classes.currentMenu
          )}
        >
          <ButtonBase onClick={() => onClick(menu.title)}>
            <Typography variant="h6">{menu.title}</Typography>
            <span className={classes.circle}></span>
          </ButtonBase>
        </li>
      ))}
    </ul>
  )
}

export default NavBar
