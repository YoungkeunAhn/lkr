import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('aboutUsSubBg.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      boxSizing: 'border-box',
      height: '60vh',
      [theme.breakpoints.down('md')]: {
        height: '100%',
      },
    },
    title: {
      fontWeight: 600,
      textShadow: '2px 2px 5px #000',
    },
    textBox: {
      maxWidth: 700,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '& .MuiTypography-root': {
        color: '#fff',
      },
    },
    contentBox: {
      marginTop: theme.spacing(4),
      '& .MuiTypography-root': {
        lineHeight: '35px',
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(4),
      },
      [theme.breakpoints.down('md')]: {
        width: '75%',
      },
    },
  })
)

export default useStyles
