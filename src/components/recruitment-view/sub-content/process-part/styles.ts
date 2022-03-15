import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    subTitle: {
      marginBottom: theme.spacing(3),
      fontWeight: 600,
    },

    processListBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '3px solid red',
    },
    gt: {
      color: '#888',
      fontWeight: 500,
      margin: theme.spacing(0, 1),
      position: 'relative',
      top: '-4vh',
    },
  })
)

export default useStyles
