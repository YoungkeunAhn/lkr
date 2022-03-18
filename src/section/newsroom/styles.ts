import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(2),
    },
    btn: {
      display: 'block',
      width: 200,
      height: 50,
      borderRadius: 50,
      margin: theme.spacing(10, 'auto', 0, 'auto'),
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        width: 180,
        height: 40,
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
      },
    },
  })
)

export default useStyles
