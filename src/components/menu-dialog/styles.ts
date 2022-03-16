import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiPaper-root': {
        backgroundImage: 'url(main_view_bg.jpg)',
        backgroundPositionX: '70%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },

      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title: {
      background: 'rgba(0,0,0,0.5)',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: theme.spacing(3),
      boxSizing: 'border-box',
    },
    titleLogo: {
      display: 'flex',
      alignItems: 'flex-end',
      width: '100%',
    },
    imgBox: {
      marginRight: theme.spacing(2),
      width: 100,
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
    closeBtn: {
      '& span': {
        color: '#fff',
      },
    },
    content: {
      background: 'rgba(0,0,0,0.5)',
      color: '#fff',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    btn: {
      display: 'flex',
      flexDirection: 'column',
      '&+&': {
        marginTop: theme.spacing(2),
      },
    },
    engTitle: {
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  })
)

export default useStyles
