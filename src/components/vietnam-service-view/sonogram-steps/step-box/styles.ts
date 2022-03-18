import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '16vw',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&+&': {
        marginLeft: theme.spacing(4),
      },
    },
    circle: {
      borderRadius: '100%',
      width: 200,
      height: 200,
      overflow: 'hidden',
      [theme.breakpoints.down('md')]: {
        width: '24vw',
        height: '24vw',
      },
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
      paddingTop: theme.spacing(3),
      '& .MuiTypography-root': {
        fontWeight: 600,
        wordBreak: 'keep-all',
      },
    },
    text: {
      color: '#fff',
      marginTop: theme.spacing(5),
    },
    title: {
      fontSize: '1.5rem',
      textAlign: 'center',
      fontWeight: 600,
      [theme.breakpoints.down('md')]: {
        fontSize: '1.3rem',
      },
    },
  })
)

export default useStyles
