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
    },

    textBox: {
      marginTop: theme.spacing(45),
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(2),
      },
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(10),
        '& .MuiTypography-root+.MuiTypography-root': {
          marginTop: theme.spacing(0),
        },
      },
    },
    logoBox: {
      display: 'flex',
      alignItems: 'flex-end',
      '& p': {
        marginLeft: theme.spacing(2),
      },
      [theme.breakpoints.down('md')]: {
        paddingBottom: theme.spacing(1),
        '& img': {
          width: '40%',
        },
        '& p': {
          marginLeft: theme.spacing(1),
        },
      },
    },
    menuIcon: {
      color: '#fff',
      fontSize: '2rem',
    },
    top: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    firstLine: {
      [theme.breakpoints.down('md')]: {
        fontWeight: 600,
        fontSize: '3rem',
        marginBottom: theme.spacing(2),
      },
    },
  })
)

export default useStyles
