import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(13),
      paddingBottom: theme.spacing(13),
    },
    lkrLogo: {
      color: '#818181',
      fontSize: '1.2rem',
      margin: theme.spacing(0, 'auto'),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: `"Segoe UI", "Open Sans", serif;`,
      '&::after': {
        content: '""',
        padding: theme.spacing(0.5, 4.5),
        marginTop: theme.spacing(1),
        backgroundColor: '#B9EB0F',
      },
    },
    title: {
      fontWeight: 600,
      fontFamily: `"Segoe UI", "Open Sans", serif;`,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(10),
    },
  })
)

export default useStyles
