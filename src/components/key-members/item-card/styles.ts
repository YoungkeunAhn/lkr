import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'cetner',
      '&>*+*': {
        marginTop: theme.spacing(1),
      },
      paddingBottom: theme.spacing(2),
    },
    imgBox: {
      overflow: 'hidden',
      borderRadius: 30,
      borderTopRightRadius: 0,
      height: '100%',
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.3s',
      '&>img': {
        width: '100%',
        height: '100%',
      },
      '&:hover': {
        transform: 'translate(-1%, -1%)',
      },
    },
    jobPosition: {
      fontWeight: 600,
    },
    name: {
      color: '#888',
    },
    resumeBox: {},
  })
)

export default useStyles
