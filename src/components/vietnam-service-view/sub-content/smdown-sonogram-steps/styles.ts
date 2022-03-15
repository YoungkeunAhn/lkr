import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { themes } from 'theme/themes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      '& span': {
        fontWeight: 600,
      },
    },
    mainText: {
      wordBreak: 'keep-all',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
    },
  })
)

export default useStyles
