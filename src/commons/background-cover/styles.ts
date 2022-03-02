import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      paddingTop: theme.spacing(6.5),
      paddingBottom: theme.spacing(6.5),
      background: 'rgba(0,0,0,0.5)',
    },
  })
)

export default useStyles
