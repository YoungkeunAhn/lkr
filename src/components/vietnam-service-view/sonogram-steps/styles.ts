import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('sonogram_steps_bg.jpg')`,
      backgroundPosition: 'bottom 0px right 50%',
      backgroundSize: '100%',
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
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
    coilImgBox: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 70,
      '& img': {
        width: '80%',
        height: '100%',
        objectFit: 'contain',
      },
      [theme.breakpoints.down('md')]: {
        '& img': {
          width: '50%',
        },
      },
    },
  })
)

export default useStyles
