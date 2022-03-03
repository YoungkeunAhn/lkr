import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bgPart: {
      display: 'flex',
      backgroundImage: `url('recruitment_bg.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      minHeight: 400,
    },
    bgCover: {
      flex: 1,
      background: 'rgba(0,0,0,0.5)',
    },
    noticeBox: {
      borderTop: '3px solid #000',
      paddingTop: theme.spacing(2),
    },
  })
)

export default useStyles
