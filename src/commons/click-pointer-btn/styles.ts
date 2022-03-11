import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    btnPointerImgBox: {
      width: 90,
      height: 90,
      position: 'relative',
      top: 60,
      right: -220,
      zIndex: 100,
      transition: '0.3s',
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    btn: {
      marginTop: theme.spacing(6),
      background: '#B9EB0F',
      borderRadius: 20,
      width: 200,
      height: 50,
      '& .MuiButton-label': {
        fontWeight: 600,
        fontSize: '1.2rem',
        color: '#666',
      },
      '&:hover': {
        background: '#c4f21f',
      },
    },
  })
)

export default useStyles
