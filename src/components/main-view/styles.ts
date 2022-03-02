import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('/main_view_bg.jpg')`,
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
      marginTop: theme.spacing(50),
    },
    logoBox: {
      display: 'flex',
      alignItems: 'flex-end',
      '& p': {
        marginLeft: theme.spacing(2),
      },
    },
  })
)

export default useStyles