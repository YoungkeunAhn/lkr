import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(3),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fff',
      border: '1px solid #aaa',
      borderRadius: '100%',
      width: 100,
      height: 100,
      '& img': {
        width: '70%',
        height: '70%',
        objectFit: 'contain',
        opacity: 0.6,
      },
    },
    title: {
      whiteSpace: 'nowrap',
    },
  })
)

export default useStyles
