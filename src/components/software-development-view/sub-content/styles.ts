import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('sd_sub_bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      height: '60vh',
      [theme.breakpoints.down('md')]: {
        height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(5),
        background: '#f6f6f6',
      },
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    bgText: {
      color: 'rgba(167,167,167,0.2)',
      position: 'absolute',
      top: '-5%',
      '& .MuiTypography-root': {
        font: 'normal normal bold 8rem/10rem Segoe UI;',
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(20),
      },
    },
    itemListBox: {
      position: 'relative',
      top: '7vh',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        // position: 'absolute',
        top: 0,
      },
    },
  })
)

export default useStyles
