import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.down('sm')]: {
        background: '#f6f6f6',
      },
    },
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
      wordBreak: 'break-word',
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(5),
      },
      '& .swiper-button-prev': {
        color: '#888',
      },
      '& .swiper-button-next': {
        color: '#888',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'block',
        textAlign: 'center',
        marginRight: theme.spacing(0),
        lineHeight: '1.8rem',
        boxSizing: 'border-box',
        '& span': {
          fontWeight: 600,
        },
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
          marginTop: theme.spacing(2),
        },
      },
    },
    sliderTextBox: {
      width: '55vw',
    },
  })
)

export default useStyles
