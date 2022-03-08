import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    mapBox: {
      [theme.breakpoints.up('sm')]: {
        width: '50%',
      },
    },
    right: {
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    btnBox: {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(5),
      },
    },
    naverBtn: {
      background: '#B9EB0F',
    },
    kakaoBtn: {
      background: '#FFDD00',
      marginLeft: theme.spacing(2),
    },
  })
)

export default useStyles
