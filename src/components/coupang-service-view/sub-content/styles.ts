import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemListBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    itemBox: {
      width: 280,
      boxSizing: 'border-box',
      padding: theme.spacing(2, 3),
      borderRadius: 100,
      background: '#fff',
      border: '1px solid #96B6D0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiTypography-root': {
        fontWeight: 600,
      },
      '&+&': {
        marginTop: theme.spacing(2),
      },
    },
    itemImgBox: {
      width: '15%',
      marginRight: theme.spacing(2),
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
    mainImgBox: {
      width: '35%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
  })
)

export default useStyles
