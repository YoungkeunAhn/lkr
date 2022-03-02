import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 10,
      border: '1px solid #B2B2B2',
      width: 500,
      zIndex: 10,
    },
    titleBox: {
      position: 'relative',
      padding: theme.spacing(2),
      background: '#fff',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      '& .MuiTypography-root': {
        fontWeight: 600,
      },
    },
    title: {
      marginTop: theme.spacing(2),
    },
    textBox: {
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      background: '#f6f6f6',
      padding: theme.spacing(4, 2),
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    arrowBox: {
      position: 'absolute',
      top: 30,
      right: -25,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#A5A5A5',
      width: 50,
      height: 50,
      borderRadius: '100%',
    },
    arrowSquare: {
      background: '#fff',
      width: 10,
      height: 15,
      borderRadius: 2,
      transform: 'translateX(3px)',
    },
    arrowTriangle: {
      background: '#fff',
      width: 0,
      height: 0,
      borderRadius: 4,
      borderTop: '15px solid #A5A5A5',
      borderBottom: '15px solid #A5A5A5',
      borderLeft: '25px solid #fff',
      borderRight: '0px solid #A5A5A5',
      borderTopRightRadius: '100%',
      borderBottomRightRadius: '100%',
      transform: 'translateX(2px)',
    },
  })
)

export default useStyles
