import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      marginBottom: theme.spacing(3),
      fontWeight: 600,
    },

    processListBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
