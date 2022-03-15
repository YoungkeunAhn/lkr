import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundImage: `url('sonogram_steps_bg.jpg')`,
      backgroundPosition: 'bottom 0px right 50%',
      backgroundSize: '250%',
      backgroundRepeat: 'no-repeat',
      '&+&': {
        marginTop: theme.spacing(2),
      },
    },
    bgCover: {
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.75)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
      boxSizing: 'border-box',
    },
    circle: {
      borderRadius: '100%',
      overflow: 'hidden',
      width: '29vw',
      height: '29vw',
      marginRight: theme.spacing(2),
    },
    circleTop: {
      background: '#818181',
      height: '35%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 200,
      borderTopRightRadius: 200,
      borderLeft: '0px',
      borderRight: '0px',
    },
    stepText: {
      color: '#B1DC1F',
    },
    circleBottom: {
      background: `url('sonogram_step_circle_bg.png')`,
      height: '65%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderBottomLeftRadius: 200,
      borderBottomRightRadius: 200,
      paddingTop: theme.spacing(2),
      '& .MuiTypography-root': {
        fontWeight: 600,
        wordBreak: 'keep-all',
      },
    },
    text: {
      color: '#fff',
      width: '51vw',
    },
    title: {
      fontSize: '1.2rem',
      textAlign: 'center',
      fontWeight: 600,
    },
  })
)

export default useStyles
