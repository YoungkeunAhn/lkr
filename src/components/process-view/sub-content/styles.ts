import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(9),
      position: 'relative',
    },
    btnPointerImgBox: {
      width: 50,
      height: 50,
      position: 'relative',
      top: 60,
      right: -200,
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
    bgText: {
      font: 'normal normal bold 162px/147px Segoe UI;',
      position: 'absolute',
      top: '32.5%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      color: '#8B8B8B',
      opacity: 0.1,
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
    },
    moveTopBox: {
      position: 'relative',
      top: '-5vh',
    },
  })
)

export default useStyles
