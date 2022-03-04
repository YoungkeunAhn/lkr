import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      marginBottom: theme.spacing(3),
    },

    processListBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    gt: {
      color: '#888',
      fontWeight: 600,
      margin: theme.spacing(0, 2),
    },
  })
)

export default useStyles
