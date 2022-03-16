import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      top: '90vh',
      right: 0,
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(2),
      zIndex: 9999,
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
