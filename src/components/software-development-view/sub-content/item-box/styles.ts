import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#606060',
      borderRadius: 10,
      padding: theme.spacing(4, 0),
      height: '100%',
      boxSizing: 'border-box',
      '& .MuiTypography-root': {
        color: '#fff',
      },
      [theme.breakpoints.down('sm')]: {
        background: '#3E3E3E',
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
        width: 200,
        height: 200,
      },
    },
  })
)

export default useStyles
