import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      marginBottom: theme.spacing(3),
    },

    processListBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gt: {
      color: '#888',
      fontWeight: 500,
      margin: theme.spacing(0, 2),
      lineHeight: '+',
    },
  })
)

export default useStyles
