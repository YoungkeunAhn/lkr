import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(5),
      },
    },
    imgBox: {
      width: '10vw',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
      [theme.breakpoints.down('sm')]: {
        width: '27vw',
      },
    },
    title: {
      marginTop: theme.spacing(3),
      whiteSpace: 'nowrap',
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(1),
      },
    },
  })
)

export default useStyles
