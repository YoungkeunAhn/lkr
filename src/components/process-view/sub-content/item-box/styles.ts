import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    arrowBox: {
      display: 'flex',
      justifyContent: 'center',
      background: '#A5A5A5',
    },
    arrowSquare: {
      background: '#fff',
      width: 10,
      height: 10,
    },
    arrowTriangle: {
      background: '#fff',
      width: 0,
      height: 0,
      borderBottom: '10px solid #f03e3e',
      borderTop: '10px solid transparent',
      borderLeft: '8px solid #fff',
      borderRight: '0px solid transparent',
    },
  })
)

export default useStyles
