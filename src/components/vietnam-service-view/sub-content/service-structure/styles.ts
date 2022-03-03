import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      marginBottom: theme.spacing(10),
      '& span': {
        fontWeight: 600,
      },
    },
    contentBox: {
      display: 'flex',
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'center',
      },
    },
    dotBorderBox: {
      border: '5px dotted #777',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'flex-end',
      padding: theme.spacing(10, 15, 0, 0),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
      },
    },
    structureTextBox: {
      maxWidth: 190,
      background: '#989898',
      borderRadius: 50,
      padding: theme.spacing(1),
      '& .MuiTypography-root': {
        color: '#fff',
      },
    },
    mockupImageBox: {
      marginRight: theme.spacing(10),
      '& img': {
        height: '70%',
      },
    },
    dotBorderCircle: {
      border: '3px dotted #777',
      borderRadius: '100%',
      width: 500,
      height: 500,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '-10vh',
      '& > *': {
        position: 'absolute',
      },
      [theme.breakpoints.down('md')]: {
        top: 0,
      },
    },
    bgColorTextBox: {
      display: 'flex',
      transform: 'translateX(-80%)',
      '& .MuiTypography-root': {
        color: '#fff',
        background: '#3E3E3E',
        fontWeight: 600,
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginLeft: theme.spacing(0.5),
      },
    },
    rightTriangle: {
      width: 0,
      height: 0,
      borderTop: '10px solid #000',
      borderBottom: '0px solid transparent',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      transform: 'translateX(1260%)',
    },
    bottomTriangle: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: '0px solid transparent',
      borderRight: '10px solid #000',
      transform: 'translateY(1260%)',
    },
    leftTriangle: {
      width: 0,
      height: 0,
      borderTop: '0px solid transparent',
      borderBottom: '10px solid #000',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      transform: 'translateX(-1260%)',
    },
    topTriangle: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: '10px solid #000',
      borderRight: '0px solid transparent',
      transform: 'translateY(-1260%)',
    },
    iconTextBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiTypography-root': {
        fontWeight: 600,
      },
    },
    hospital: {
      transform: 'translate(130%, -140%)',
      '& img': {
        width: 140,
      },
    },
    server: {
      transform: 'translate(130%, 140%)',
      '& img': {
        width: 140,
      },
    },
    circleTopLeftText: {
      transform: 'translate(-110%, -350%)',
    },
    circleBottomLeftText: {
      transform: 'translate(-110%, 350%)',
    },
    circleRightText: {
      transform: 'translate(120%, -100%)',
    },

    rightBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      '& img': {
        width: 70,
      },
    },
    rightText: {
      width: 250,
      boxSizing: 'border-box',
      padding: theme.spacing(2, 7),
      background: '#555',
      borderRadius: 50,
      marginLeft: theme.spacing(3),
      '& .MuiTypography-root': {
        color: '#fff',
        wordBreak: 'keep-all',
      },
    },
  })
)

export default useStyles
