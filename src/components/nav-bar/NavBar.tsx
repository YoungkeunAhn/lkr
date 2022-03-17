import { ButtonBase, Typography } from '@material-ui/core'
import { navMenu } from 'data/nav-menu'
import clsx from 'clsx'
import Scrollspy from 'react-scrollspy'
import React from 'react'
import useStyles from './styles'

const scrollSpyItems = [
  'main',
  'aboutUs',
  'software',
  'process',
  'coupang',
  'vietnam',
  'recruitment',
  'newsroom',
  'location',
]

type Props = {
  onClick: (menu: string) => void
  isBgBlack: boolean
}

function NavBar(props: Props) {
  const classes = useStyles()
  const { onClick, isBgBlack } = props

  const onClickTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }

  return (
    <Scrollspy
      items={scrollSpyItems}
      currentClassName={classes.currentMenu}
      className={classes.root}
      offset={-450}
    >
      {navMenu.map((menu, idx) => (
        <li
          key={idx}
          className={clsx(classes.menuBox, isBgBlack && classes.white)}
        >
          <ButtonBase onClick={() => onClick(menu.sectionId)}>
            <Typography variant='body1'>{menu.title}</Typography>
            <span className={classes.circle}></span>
          </ButtonBase>
        </li>
      ))}
      <li className={clsx(classes.menuBox, classes.white)}>
        <ButtonBase onClick={onClickTop}>
          <Typography
            variant='body1'
            style={{ color: isBgBlack ? '#fff' : '#000' }}
          >
            TOP
          </Typography>
          <span className={classes.triangle}></span>
        </ButtonBase>
      </li>
    </Scrollspy>
  )
}

export default NavBar
