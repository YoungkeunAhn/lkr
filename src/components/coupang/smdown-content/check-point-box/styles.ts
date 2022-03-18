import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#fff',
      borderRadius: 10,
      padding: theme.spacing(2, 2, 6, 2),
      boxSizing: 'border-box',
      width: '100%',
      height: '35vh',
    },
    checkPoint: {
      background: '#555',
      color: '#fff',
      borderRadius: 20,
      padding: theme.spacing(0.2, 1),
    },
    textBox: {
      marginTop: theme.spacing(2),
    },
  })
)

export default useStyles
