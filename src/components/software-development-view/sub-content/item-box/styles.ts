import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '13.75vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#606060',
      borderRadius: 10,
      padding: theme.spacing(3),
      height: '100%',
      boxSizing: 'border-box',
      '& .MuiTypography-root': {
        color: '#fff',
      },
    },
    itemCircle: {
      width: 150,
      height: 150,
      borderRadius: '100%',
      background: '#B9EB0F',
      padding: theme.spacing(4),
      marginBottom: theme.spacing(2),
      boxSizing: 'border-box',
      position: 'relative',
      '& img': {
        // width: '100%',
        // height: '100%',
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
      '& ul': {
        width: '100%',
      },
      '& li': {
        display: 'flex',
        width: '100%',
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
