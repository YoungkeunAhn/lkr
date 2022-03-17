import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderTop: '5px solid #000',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(5),
      },
    },
    subTitle: {
      marginBottom: theme.spacing(3),
      fontWeight: 600,
    },
    textPart: {
      paddingTop: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(0),
      },
    },
    itemTitle: {
      fontWeight: 600,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(6),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(0),
        marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.down('sm')]: {
        wordBreak: 'keep-all',
      },
    },
    textBox: {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    },
    mainImgBox: {
      width: '30%',
      zIndex: 10,
      transform: 'translateY(-30%)',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
      [theme.breakpoints.down('md')]: {
        width: '40%',
      },
    },
    smDownMainImgBox: {
      width: '100%',
      height: '100%',
      transform: 'translate(4%, -15%)',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
    lineBox: {
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(2),
        '& > div:first-child': {
          whiteSpace: 'nowrap',
        },
      },
      [theme.breakpoints.down('sm')]: {
        '& .MuiTypography-root + .MuiTypography-root': {
          marginTop: theme.spacing(1),
        },
      },
    },
  })
)

export default useStyles
