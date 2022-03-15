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
  children?: React.ReactNode
  mainText: string[]
  subText?: string[]
  background?: string
}
function TitleContentFrame(props: Props) {
  const { title, children, mainText, subText, background } = props
  const classes = useStyles()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box className={classes.root} style={{ background }}>
      <Container maxWidth='lg'>
        <Typography
          variant={smDown ? 'body2' : 'body1'}
          className={classes.lkrLogo}
          align='center'
        >
          LKR
        </Typography>
        <Typography
          variant={smDown ? 'h6' : 'h4'}
          className={classes.title}
          align='center'
        >
          {title.toUpperCase()}
        </Typography>
        <Box className={classes.mainTextBox}>
          {mainText.map((text, idx) => (
            <Typography key={idx} variant={smDown ? 'h5' : 'h2'} align='center'>
              <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </Typography>
          ))}
        </Box>
        <Box className={classes.subTextBox}>
          {subText && smDown ? (
            <Typography variant='body1' align='center'>
              {subText.map((text) => text)}
            </Typography>
          ) : (
            subText &&
            subText.map((text, idx) => (
              <Typography
                key={idx}
                variant={'h6'}
                align='center'
                style={{ lineHeight: subText.length === 1 ? '40px' : '' }}
              >
                {text}
              </Typography>
            ))
          )}
        </Box>
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}

export default TitleContentFrame
