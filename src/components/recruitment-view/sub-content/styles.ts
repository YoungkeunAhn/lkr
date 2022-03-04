import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#F9F9F9',
    },
    bgPart: {
      display: 'flex',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      minHeight: 400,
    },
    topBg: {
      backgroundImage: `url('recruitment_bg1.jpg')`,
    },
    bottomBg: {
      marginTop: theme.spacing(15),
      backgroundImage: `url('recruitment_bg2.jpg')`,
    },
    bgCover: {
      flex: 1,
      background: 'rgba(0,0,0,0.5)',
    },
  })
)

export default useStyles
