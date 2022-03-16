import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    imgBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: '100%',
        hegith: '100%',
        objectFit: 'contain',
      },
    },
    title: {
      fontWeight: 600,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(3),
    },
    subTextBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(2),
      },
    },
  })
)

export default useStyles
