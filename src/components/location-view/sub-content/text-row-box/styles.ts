import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      '&+&': {
        marginTop: theme.spacing(2),
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
      width: 100,
      whiteSpace: 'nowrap',
      marginRight: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
    },
    text: {},
  })
)

export default useStyles
