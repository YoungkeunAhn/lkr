import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 10,
      position: 'fixed',
      top: '40%',
      right: 38,
      '& li+li': {
        marginTop: theme.spacing(1),
      },
    },
    menuBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      '& .MuiTypography-root': {
        fontWeight: 500,
        letterSpacing: 0.5,
        transition: '.5s',
      },
      '&:hover .MuiTypography-root': {
        transform: 'translateX(-5px)',
      },
    },
    white: {
      '& .MuiTypography-root': {
        color: '#fff',
      },
      '& span': {
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
      '& .MuiTypography-root:first-letter': {
        fontSize: '1.3rem',
        color: '#B9EB0F',
        textTransform: 'uppercase',
      },
      '& $circle': {
        height: 30,
        background: '#B9EB0F',
      },
    },
    triangle: {
      width: 0,
      height: 0,
      borderBottom: '13px solid #f03e3e',
      borderTop: '0px solid transparent',
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      marginLeft: theme.spacing(1),
    },
  })
)

export default useStyles
