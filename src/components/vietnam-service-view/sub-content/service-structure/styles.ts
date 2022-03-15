import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      marginBottom: theme.spacing(10),
      '& span': {
        fontWeight: 600,
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
