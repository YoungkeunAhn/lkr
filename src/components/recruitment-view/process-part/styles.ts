import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    subTitle: {
      marginBottom: theme.spacing(3),
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(0),
      },
    },

    processListBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    gt: {
      color: '#888',
      fontWeight: 500,
      margin: theme.spacing(0, 1),
      transform: 'translateY(-60%)',
    },
  })
)

export default useStyles
