import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { themes } from 'theme/themes'

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
    bgCover: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      paddingTop: theme.spacing(6.5),
      paddingBottom: theme.spacing(6.5),
      background: 'rgba(0,0,0,0.5)',
    },
    textBox: {
      marginTop: theme.spacing(30),
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
