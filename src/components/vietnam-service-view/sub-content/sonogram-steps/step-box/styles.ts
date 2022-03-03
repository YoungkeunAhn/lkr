import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
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
      padding: theme.spacing(0, 3),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 200,
      borderBottomRightRadius: 200,
      '& .MuiTypography-root': {
        fontWeight: 600,
        wordBreak: 'keep-all',
      },
    },
    text: {
      color: '#fff',
      marginTop: theme.spacing(5),
    },
  })
)

export default useStyles
