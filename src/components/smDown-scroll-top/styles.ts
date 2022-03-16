import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: '5vh',
      right: '2vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      background: '#032030',
      padding: theme.spacing(1, 2),

      borderRadius: 10,

      color: '#fff',
    },
    btn: {},
    triangle: {
      width: 0,
      height: 0,
      borderBottom: '13px solid #f03e3e',
      borderTop: '0px solid transparent',
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      marginLeft: theme.spacing(1),
    },
  })
)

export default useStyles
