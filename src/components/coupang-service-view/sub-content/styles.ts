import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    itemListBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemBox: {
      width: 280,
      padding: theme.spacing(2, 4),
      borderRadius: 100,
      background: '#fff',
      border: '1px solid #96B6D0',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '&+&': {
        marginTop: theme.spacing(2),
      },
      '& img': {
        marginRight: theme.spacing(2),
      },
    },
    mainImgBox: {},
  })
)

export default useStyles
