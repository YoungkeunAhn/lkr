import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    title: {
      color: '#B9EB0F',
    },
    text: {
      color: '#fff',
    },
    divider: {
      color: '#fff',
      margin: theme.spacing(0, 1),
    },
  })
)

export default useStyles
