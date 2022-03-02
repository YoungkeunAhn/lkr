import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('aboutUsSubBg.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    },
    title: {
      fontWeight: 600,
      textShadow: '2px 2px 5px #000',
    },
    textBox: {
      maxWidth: 700,
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
      '& .MuiTypography-root': {
        color: '#fff',
      },
    },
    contentBox: {
      marginTop: theme.spacing(10),
      '& .MuiTypography-root': {
        fontWeight: 300,
        lineHeight: '35px',
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(6),
      },
    },
  })
)

export default useStyles
