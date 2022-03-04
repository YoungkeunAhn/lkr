import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 0,
      border: '1px solid #ddd',
      borderRadius: 10,
      width: '100%',
      height: ' 100%',
    },
    header: {
      padding: theme.spacing(1, 1, 0, 1),
      display: 'flex',
      height: 150,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      position: 'relative',
    },
    topBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    leftBox: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      marginTop: theme.spacing(1),
      fontWeight: 600,
      maxHeight: 60,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
    },
    talkIcon: {
      width: 40,
      heigth: 40,
      marginRight: theme.spacing(2),
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    category: {
      color: '#fff',
      background: '#555',
      borderRadius: 4,
      padding: theme.spacing(1, 2),
    },
    tag: {
      position: 'absolute',
      bottom: 4,
      color: '#888',
    },
    thumbnail: {
      flex: 1,
      maxHeight: 250,
      padding: 0,
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'fill',
        borderBottom: '1px solid #ddd',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      },
    },
  })
)

export default useStyles
