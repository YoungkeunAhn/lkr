import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#000',
      padding: theme.spacing(4, 0, 3, 0),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
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
  })
)

export default useStyles
