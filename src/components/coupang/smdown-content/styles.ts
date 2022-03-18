import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
    mainImgBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
    swiperBox: {
      width: '100%',
    },
  })
)

export default useStyles
