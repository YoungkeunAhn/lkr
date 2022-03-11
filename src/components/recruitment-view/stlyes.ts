import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTextWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    subTextBox: {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      marginRight: theme.spacing(8),
      wordBreak: 'keep-all',
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(5),
      },
    },
    imgBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        [theme.breakpoints.down('sm')]: {
          width: '80%',
        },
      },
    },
  })
)

export default useStyles
