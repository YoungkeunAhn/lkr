import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(13),
      paddingBottom: theme.spacing(13),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
    },
    lkrLogo: {
      color: '#818181',
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
      [theme.breakpoints.down('sm')]: {
        '&::after': {
          padding: theme.spacing(0.2, 3),
        },
      },
    },
    title: {
      fontWeight: 600,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
      },
    },
    mainTextBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      fontWeight: 500,
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(2),
      },
      '& span': {
        fontWeight: 600,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
      },
    },

    subTextBox: {
      paddingTop: theme.spacing(4),
      '& .MuiTypography-root:first-child': {
        lineHeight: '40px',
      },
      '& .MuiTypography-root': {
        lineHeight: '40px',
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(1),
      },
      [theme.breakpoints.down('md')]: {
        '& .MuiTypography-root': {
          lineHeight: 1.9,
        },
        '& .MuiTypography-root:first-child': {
          lineHeight: 1.9,
        },
        '& .MuiTypography-root+.MuiTypography-root': {
          marginTop: theme.spacing(0),
        },
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        wordBreak: 'keep-all',
        '& .MuiTypography-root': {
          lineHeight: 1.8,
        },
        '& .MuiTypography-root:first-child': {
          lineHeight: 1.8,
        },
      },
    },
    smDownMainText: {
      // wordBreak: 'keep-all',
    },
    smDownSubText: {
      // wordBreak: 'keep-all',
      // lineHeight: 1.5,
    },
  })
)

export default useStyles
