import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      '&+&': {
        marginTop: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(1),
        borderBottom: '1px solid #eee',
      },
    },
    titleBox: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      '&>div': {
        width: '100%',
        background: '#b9eb0f',
      },
    },
    title: {
      fontWeight: 600,
      width: 110,
      whiteSpace: 'nowrap',
      marginRight: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(to top, #b9eb0f 40%, transparent 40%)',
      [theme.breakpoints.down('sm')]: {
        width: 100,
      },
    },
    text: {
      [theme.breakpoints.down('sm')]: {
        fontWeight: 600,
      },
    },
  })
)

export default useStyles
