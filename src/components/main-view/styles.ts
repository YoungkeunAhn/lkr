import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('main_view_bg.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'right top',
      height: '100vh',
      '& .MuiTypography-root': {
        color: '#fff',
      },
      '& h2': {
        fontWeight: 500,
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(2),
      },
    },

    textBox: {
      marginTop: theme.spacing(45),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(10),
      },
    },
    logoBox: {
      display: 'flex',
      alignItems: 'flex-end',
      '& p': {
        marginLeft: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(1),
        '& img': {
          width: '40%',
        },
      },
    },
    menuIcon: {
      color: '#fff',
      fontSize: '3rem',
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        position: 'fixed',
        top: '3vh',
        left: '7vw',
        zIndex: 1000,
      },
    },
  })
)

export default useStyles
