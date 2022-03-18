import { Hidden, useMediaQuery, useTheme } from '@material-ui/core'
import NavBar from 'components/nav-bar/NavBar'
import SmDownScrollTop from 'components/sm-down-scroll-top/SmDownScrollTop'
import { sectionList } from 'data/section'
import React, { useEffect, useState } from 'react'

type OffsetValueType = {
  top: number
  bottom: number
}

function App() {
  const [isBgBlack, setIsBgBlack] = useState<boolean>(true)

  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  const onClickMenu = (sectionId: string) => {
    const currentSection = document.getElementById(sectionId)
    window.scrollTo({ behavior: 'smooth', top: currentSection?.offsetTop })
  }

  const onCreateOffsetValue = () => {
    const offsetValue: OffsetValueType[] = []

    for (let i = 1; i < 7; i++) {
      const blackBgDom = document.getElementById(`blackBg${i}`)
      if (blackBgDom) {
        if (i === 4) {
          offsetValue.push({
            top: blackBgDom.offsetTop,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop,
          })
        } else if (i === 5) {
          offsetValue.push({
            top: blackBgDom.offsetTop + 100,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop + 100,
          })
        } else if (i === 6) {
          offsetValue.push({
            top: blackBgDom.offsetTop + 300,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop + 300,
          })
        } else {
          offsetValue.push({
            top: blackBgDom.offsetTop - 500,
            bottom: blackBgDom.offsetHeight + blackBgDom.offsetTop - 500,
          })
        }
      }
    }

    return offsetValue
  }

  const onChangeNavColor = (offsetValue: OffsetValueType[]) => {
    window.addEventListener('scroll', function (e) {
      if (
        this.window.scrollY > offsetValue[0].top &&
        this.window.scrollY < offsetValue[0].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[1].top &&
        this.window.scrollY < offsetValue[1].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[2].top &&
        this.window.scrollY < offsetValue[2].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[3].top &&
        this.window.scrollY < offsetValue[3].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[4].top &&
        this.window.scrollY < offsetValue[4].bottom
      ) {
        setIsBgBlack(true)
      } else if (
        this.window.scrollY > offsetValue[5].top &&
        this.window.scrollY < offsetValue[5].bottom
      ) {
        setIsBgBlack(true)
      } else {
        setIsBgBlack(false)
      }
    })
  }

  useEffect(() => {
    if (!mdDown) {
      const offsetValue = onCreateOffsetValue()
      onChangeNavColor(offsetValue)
    }
  }, [mdDown])

  return (
    <div>
      {sectionList.map((item, idx) => (
        <section id={item.id} key={idx}>
          {item.view}
        </section>
      ))}
      <Hidden lgUp>
        <SmDownScrollTop />
      </Hidden>
      <Hidden lgDown>
        <NavBar onClick={onClickMenu} isBgBlack={isBgBlack} />
      </Hidden>
    </div>
  )
}

export default App
