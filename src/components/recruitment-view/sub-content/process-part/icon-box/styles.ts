import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imgBox: {
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
    title: {
      marginTop: theme.spacing(3),
      whiteSpace: 'nowrap',
      fontSize: '1.2rem',
    },
  })
)

export default useStyles
