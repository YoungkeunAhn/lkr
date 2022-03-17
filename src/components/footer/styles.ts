import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#000',
      padding: theme.spacing(4, 2, 3, 2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      boxSizing: 'border-box',
      position: 'relative',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logo: {
      marginBottom: theme.spacing(5),
      width: 100,
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
      [theme.breakpoints.down('sm')]: {
        width: '15vw',
      },
    },
    copyright: {
      color: '#fff',
    },
    scrollTopBtn: {
      borderRadius: '100%',
      border: '1px solid #fff',
      width: 50,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      transform: 'translateX(300%)',
    },
    mdDownScrollTopBtn: {
      position: 'absolute',
      top: 0,
      right: -20,
      width: '9vw',
      height: '9vw',
      whiteSpace: 'nowrap',
      fontSize: '0.6rem',
      [theme.breakpoints.up('sm')]: {
        width: '4vw',
        height: '4vw',
      },
    },
  })
)

export default useStyles
