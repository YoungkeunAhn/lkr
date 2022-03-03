import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('sonogram_steps_bg.jpg')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    bgCover: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    title: {
      color: '#fff',
      '& span': {
        fontWeight: 600,
      },
    },
    subTitle: {
      color: '#fff',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
    contentBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    coilArrow: {
      width: 100,
      objectFit: 'contain',
      position: 'relative',
      top: '-5vh',
      margin: theme.spacing(0, 3),
    },
  })
)

export default useStyles
