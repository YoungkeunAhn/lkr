import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: '20%',
      right: 50,
      '& li+li': {
        marginTop: theme.spacing(1),
      },
    },
    menuBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      '& p': {
        fontWeight: 300,
        letterSpacing: 0.5,
        transition: '.5s',
      },
      '&:hover p': {
        transform: 'translateX(-5px)',
      },
    },
    white: {
      '& .MuiTypography-root': {
        color: '#fff',
      },
    },
    circle: {
      width: 10,
      height: 10,
      background: '#fff',
      borderRadius: 50,
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    currentMenu: {
      '& p:first-letter': {
        fontSize: '1.3rem',
        color: '#B9EB0F',
        textTransform: 'uppercase',
      },
      '& $circle': {
        height: 30,
        background: '#B9EB0F',
      },
    },
  })
)

export default useStyles
