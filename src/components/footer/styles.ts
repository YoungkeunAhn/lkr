import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#000',
      padding: theme.spacing(4, 0, 3, 0),
      justifyContent: 'center',
      alignItems: 'center',
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
  })
)

export default useStyles
