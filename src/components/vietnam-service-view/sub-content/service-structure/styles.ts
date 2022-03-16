import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
      },
    },
    title: {
      marginBottom: theme.spacing(10),
      '& span': {
        fontWeight: 600,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(5),
      },
    },
    contentBox: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        boxSizing: 'border-box',
      },
    },
    imgBox: {
      width: '100%',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },

    rightBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      '& img': {
        width: 70,
      },
    },
    rightText: {
      width: 250,
      boxSizing: 'border-box',
      padding: theme.spacing(2, 7),
      background: '#555',
      borderRadius: 50,
      marginLeft: theme.spacing(3),
      '& .MuiTypography-root': {
        color: '#fff',
        wordBreak: 'keep-all',
      },
    },
  })
)

export default useStyles
