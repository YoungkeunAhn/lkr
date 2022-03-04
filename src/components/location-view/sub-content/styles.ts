import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    right: {
      width: '80%',
      padding: theme.spacing(3),
    },
    naverBtn: {
      background: '#B9EB0F',
    },
    kakaoBtn: {
      background: '#FFDD00',
    },
  })
)

export default useStyles
