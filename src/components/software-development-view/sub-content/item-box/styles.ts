import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#606060',
      borderRadius: 10,
      padding: theme.spacing(5),
      '& .MuiTypography-root': {
        color: '#fff',
      },
    },
    itemCircle: {
      width: 200,
      height: 200,
      borderRadius: '100%',
      background: '#B9EB0F',
      padding: theme.spacing(4),
      marginBottom: theme.spacing(2),
      position: 'relative',
      '& img': {
        width: '100%',
        heigth: '100%',
        objectFit: 'contain',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      [theme.breakpoints.down('sm')]: {
        width: 100,
        height: 100,
      },
    },
    itemList: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      marginTop: theme.spacing(2),
      '& li': {
        display: 'flex',
      },
      '& li:before': {
        content: '"-"',
        color: '#fff',
        marginRight: theme.spacing(1),
      },
    },
  })
)

export default useStyles
