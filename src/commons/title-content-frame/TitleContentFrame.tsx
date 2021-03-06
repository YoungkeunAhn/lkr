import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  mainText: string[]
  subText?: string[]
  smDownMainText: string
  smDownSubText?: string

  background?: string
  children?: React.ReactNode
  noBottomPadding?: true
}
function TitleContentFrame(props: Props) {
  const {
    title,
    children,
    mainText,
    subText,
    background,
    smDownMainText,
    noBottomPadding,
    smDownSubText,
  } = props
  const classes = useStyles()
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      className={classes.root}
      style={{ background, paddingBottom: noBottomPadding && 0 }}
    >
      <Container maxWidth='lg'>
        <Box pl={mdDown && !smDown && 4} pr={mdDown && !smDown && 4}>
          <Typography
            variant={mdDown ? 'body2' : 'body1'}
            className={classes.lkrLogo}
            align='center'
          >
            LKR
          </Typography>
          <Typography
            variant={smDown ? 'body1' : mdDown ? 'h5' : 'h4'}
            className={classes.title}
            align='center'
          >
            {title.toUpperCase()}
          </Typography>
          <Box className={classes.mainTextBox}>
            {smDown ? (
              <Typography
                variant='h6'
                align='center'
                className={classes.smDownMainText}
              >
                <div dangerouslySetInnerHTML={{ __html: smDownMainText }}></div>
              </Typography>
            ) : (
              mainText.map((text, idx) => (
                <Typography
                  key={idx}
                  variant={mdDown ? 'h4' : 'h3'}
                  align='center'
                >
                  <div dangerouslySetInnerHTML={{ __html: text }}></div>
                </Typography>
              ))
            )}
          </Box>
          <Box className={classes.subTextBox}>
            {subText && smDown ? (
              <Typography
                variant='body2'
                align='center'
                className={classes.smDownSubText}
              >
                {smDownSubText ?? subText.map((text) => text)}
              </Typography>
            ) : (
              subText &&
              subText.map((text, idx) => (
                <Typography
                  key={idx}
                  variant={mdDown ? 'body1' : 'h6'}
                  align='center'
                  style={{
                    lineHeight: !mdDown && subText.length === 1 ? '40px' : 1.7,
                    fontWeight: 400,
                  }}
                >
                  {text}
                </Typography>
              ))
            )}
          </Box>
          <Box>{children}</Box>
        </Box>
      </Container>
    </Box>
  )
}

export default TitleContentFrame
