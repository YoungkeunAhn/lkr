import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { themes } from 'theme/themes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    left: {
      display: 'flex',
      position: 'relative',
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
    },
    right: {
      background: '#3E3E3E',
      borderRadius: 10,
      padding: theme.spacing(2),
      maxWidth: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
      },
    },
    smallSquare: {
      background: '#3E3E3E',
      borderRadius: 10,
      position: 'relative',
      padding: themes.spacing(3),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 250,
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
      width: 250,
      height: 250,
      '& img': {
        maxHeight: 150,
      },
    },

    hospital1: {
      transform: 'translate(-30%, -30%)',
      '& img': {
        maxHeight: 120,
      },
    },
    hospital2: {
      transform: 'translate(30%, -30%)',
      '& img': {
        maxHeight: 120,
      },
    },
    hospital3: {
      transform: 'translate(-30%,30%)',
      '& img': {
        maxHeight: 120,
      },
    },
    hospital4: {
      transform: 'translate(30%,30%)',
      '& img': {
        maxHeight: 120,
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
        marginTop: theme.spacing(3),
      },
    },
    leftTopArrow: {
      transform: 'rotate(45deg) translate(10%,10%)',
    },
    rightTopArrow: {
      transform: 'rotate(-220deg) translate(90%, 130%)',
    },
    leftBottomArrow: {
      transform: 'rotate(-45deg) translate(50%, -100%)',
    },
    rightBottomArrow: {
      transform: 'rotate(-130deg) translate(110%, -50%)',
    },
  })
)

export default useStyles