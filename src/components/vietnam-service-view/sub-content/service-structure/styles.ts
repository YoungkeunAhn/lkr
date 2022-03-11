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
      width: '65%',
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
      height: '70%',
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    dotBorderCircle: {
      border: '3px dotted #777',
      borderRadius: '100%',
      width: 400,
      height: 400,
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '-5vh',
      '& > *': {
        position: 'absolute',
      },
      [theme.breakpoints.down('md')]: {
        top: 0,
      },
    },
    bgColorTextBox: {
      display: 'flex',
      transform: 'translateX(-30%)',
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
      transform: 'translateX(1010%)',
    },
    bottomTriangle: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: '0px solid transparent',
      borderRight: '10px solid #000',
      transform: 'translateY(1010%)',
    },
    leftTriangle: {
      width: 0,
      height: 0,
      borderTop: '0px solid transparent',
      borderBottom: '10px solid #000',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      transform: 'translateX(-1010%)',
    },
    topTriangle: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: '10px solid #000',
      borderRight: '0px solid transparent',
      transform: 'translateY(-1010%)',
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
      transform: 'translate(120%, -130%)',
      width: 130,
      '& img': {
        width: '80%',
        heigth: '80%',
        objectFit: 'contain',
      },
    },
    server: {
      transform: 'translate(120%, 130%)',
      width: 120,
      '& img': {
        width: '100%',
        heigth: '100%',
        objectFit: 'contain',
      },
    },
    circleTopLeftText: {
      transform: 'translate(-100%, -230%)',
    },
    circleBottomLeftText: {
      transform: 'translate(-100%, 230%)',
    },
    circleRightText: {
      transform: 'translate(100%, -100%)',
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
