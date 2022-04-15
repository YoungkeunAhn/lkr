import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: theme.spacing(5),
      },
    },
    left: {
      display: 'flex',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    leftInnerBox: {
      display: 'flex',
      flexDirection: 'column',
      '& > div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& > div+div': {
        marginTop: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    right: {
      background: '#3E3E3E',
      borderRadius: 10,
      padding: theme.spacing(6),
      maxWidth: 700,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(0),
        marginTop: theme.spacing(0),
        maxWidth: 1000,
      },
    },
    smallSquare: {
      background: '#3E3E3E',
      borderRadius: 10,
      padding: theme.spacing(3),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 190,
      height: 190,
      position: 'relative',
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff',
      },
      '&+&': {
        marginLeft: theme.spacing(2),
      },
      '& > img': {
        maxWidth: 130,
      },
      [theme.breakpoints.down('md')]: {
        width: '12vw',
        height: '12vw',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '75%',
        marginBottom: theme.spacing(4),
      },
    },
    circle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(5),
      borderRadius: '100%',
      position: 'absolute',
      zIndex: 10,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
      width: 200,
      height: 200,
      '& img': {
        maxHeight: 150,
      },
      [theme.breakpoints.down('md')]: {
        width: 100,
        height: 100,
        '& img': {
          height: '80%',
        },
        '& .MuiTypography-root': {
          fontWeight: 600,
        },
      },
    },

    hospital1: {
      transform: 'translate(-30%, -30%)',
      '& img': {
        maxHeight: 100,
      },
      [theme.breakpoints.down('md')]: {
        '& img': {
          width: '60%',
        },
      },
    },
    hospital2: {
      transform: 'translate(30%, -30%)',
      '& img': {
        maxHeight: 100,
      },
      [theme.breakpoints.down('md')]: {
        '& img': {
          width: '60%',
        },
      },
    },
    hospital3: {
      transform: 'translate(-45%,30%)',
      '& img': {
        maxHeight: 100,
      },
      [theme.breakpoints.down('md')]: {
        '& img': {
          width: '60%',
        },
      },
    },
    hospital4: {
      transform: 'translate(40%,30%)',
      '& img': {
        maxHeight: 100,
      },
      [theme.breakpoints.down('md')]: {
        '& img': {
          width: '60%',
        },
      },
    },
    triangle: {
      background: '#fff',
      width: 0,
      height: 0,
      borderTop: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderLeft: '25px solid #fff',
      borderRight: '0px solid transparent',
      marginRight: theme.spacing(2),
    },
    coilArrow: {
      position: 'absolute',
      zIndex: 20,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    },
    textList: {
      color: '#fff',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      '& li': {
        display: 'flex',
        alignItems: 'center',
      },
      '& li:before': {
        content: '""',
        width: 0,
        height: 0,
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '10px solid #fff',
        borderRight: '10px solid transparent',
      },
      '& li+li': {
        marginTop: theme.spacing(5.4),
      },
      [theme.breakpoints.down('md')]: {
        '& li+li': {
          marginTop: theme.spacing(2),
        },
      },
    },
    leftTopArrow: {
      width: '35%',
      transform: 'rotate(45deg) translate(10%,10%)',
      [theme.breakpoints.down('md')]: {
        width: '30%',
      },
    },
    rightTopArrow: {
      width: '35%',
      transform: 'rotate(-220deg) translate(90%, 130%)',
      [theme.breakpoints.down('md')]: {
        width: '30%',
      },
    },
    leftBottomArrow: {
      width: '35%',
      transform: 'rotate(-45deg) translate(50%, -100%)',
      [theme.breakpoints.down('md')]: {
        width: '30%',
      },
    },
    rightBottomArrow: {
      width: '35%',
      transform: 'rotate(-130deg) translate(110%, -50%)',
      [theme.breakpoints.down('md')]: {
        width: '30%',
      },
    },
  })
)

export default useStyles
