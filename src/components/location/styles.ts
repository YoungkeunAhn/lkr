import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    mapBox: {
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    right: {
      maxWidth: 460,
      wordBreak: 'keep-all',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    btnBox: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        '& > div': {
          display: 'flex',
          justifyContent: 'space-between',
        },
        '& > div:nth-child(1)': {
          borderBottom: '1px solid #B9EB0F',
          '& svg': {
            fill: '#B9EB0F',
          },
        },
        '& > div:nth-child(2)': {
          borderBottom: '1px solid #FFDD00',
          '& svg': {
            fill: '#FFDD00',
          },
        },
      },
    },
    naverBtn: {
      background: '#B9EB0F',
      fontWeight: 600,
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
      },
      '&:active': {
        background: '#B9EB0F',
      },
    },
    kakaoBtn: {
      background: '#FFDD00',
      marginLeft: theme.spacing(2),
      fontWeight: 600,
      '&:active': {
        background: '#FFDD00',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(0),
        marginTop: theme.spacing(2),
        fontSize: '0.9rem',
      },
    },
  })
)

export default useStyles
