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

      '&::after': {
        content: '""',
        padding: theme.spacing(0.5, 4.5),
        marginTop: theme.spacing(1),
        backgroundColor: '#B9EB0F',
      },
    },
    title: {
      fontWeight: 600,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(8),
    },
    mainTextBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      fontWeight: 500,
      '& h2': {
        fontSize: '4.5rem',
      },
      '& h2+h2': {
        marginTop: theme.spacing(4),
      },
      '& span': {
        fontWeight: 600,
      },
    },
    subTextBox: {
      padding: theme.spacing(4, 21),
      '& .MuiTypography-root:first-child': {
        lineHeight: 'inherit',
      },
      '& .MuiTypography-root': {
        lineHeight: '50px',
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(2),
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
      },
    },
  })
)

export default useStyles
