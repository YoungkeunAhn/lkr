import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTextWrapper: {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    subTextBox: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(5),
      },
      //   '&:before': {
      //     content: `''`,
      //     width: 50,
      //     height: 50,
      //     backgroundImage: `url('double_quote1.png')`,
      //     backgroundSize: 'contain',
      //     backgroundPosition: 'center',
      //     backgroundRepeat: 'no-repeat',
      //   },
      //   '&:after': {
      //     content: `''`,
      //     width: 50,
      //     height: 50,
      //     backgroundImage: `url('double_quote2.png')`,
      //     backgroundSize: 'contain',
      //     backgroundPosition: 'center',
      //     backgroundRepeat: 'no-repeat',
      //     float: 'right',
      //     position: 'absolute',
      //     right: 0,
      //     bottom: -10,
      //   },
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
