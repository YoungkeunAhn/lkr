import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#F9F9F9',
    },
    bgPart: {
      display: 'flex',
      backgroundRepeat: 'no-repeat',
      // backgroundAttachment: 'fixed',
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      height: '60vh',
      boxSizing: 'border-box',
      [theme.breakpoints.down('sm')]: {
        height: '20vh',
      },
    },
    topBg: {
      backgroundImage: `url('recruitment_bg1.jpg')`,
    },
    bottomBg: {
      marginTop: theme.spacing(15),
      backgroundImage: `url('recruitment_bg2.jpg')`,
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(5),
      },
    },
    bgCover: {
      flex: 1,
      background: 'rgba(0,0,0,0.5)',
      [theme.breakpoints.down('sm')]: {
        background: 'none',
      },
    },
  })
)

export default useStyles
