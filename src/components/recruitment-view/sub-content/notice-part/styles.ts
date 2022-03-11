import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    noticeBox: {
      borderTop: '5px solid #000',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    subTitle: {
      marginBottom: theme.spacing(3),
      fontWeight: 600,
    },
    textPart: {
      paddingTop: theme.spacing(6),
    },
    itemTitle: {
      fontWeight: 600,
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(6),
    },
    textBox: {
      marginBottom: theme.spacing(2),
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
    },
  })
)

export default useStyles
