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
      boxShadow: '5px 5px 15px #00000029',
      transition: 'transform 0.3s',
      '&:hover': {
        cursor: 'pointer',
        transform: 'translate(-1%,-1%)',
      },
    },
    header: {
      padding: theme.spacing(2, 2, 0, 2),
      display: 'flex',
      height: 200,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        height: 150,
      },
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
      width: 30,
      heigth: 30,
      marginRight: theme.spacing(1),
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    category: {
      color: '#fff',
      background: '#555',
      borderRadius: 4,
      padding: theme.spacing(0.2, 1),
    },
    tag: {
      position: 'absolute',
      bottom: 4,
      color: '#888',
    },
    thumbnail: {
      flex: 1,
      height: '80%',
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
    right: {
      '& img': {
        height: 170,
        transform: 'translateY(4px)',
      },
      [theme.breakpoints.down('sm')]: {
        '& img': {
          height: '70vw',
          transform: 'translateY(4px)',
        },
      },
    },
  })
)

export default useStyles
