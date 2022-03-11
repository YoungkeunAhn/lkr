import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url('sd_sub_bg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      position: 'relative',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bgText: {
      color: 'rgba(167,167,167,0.2)',
      position: 'relative',
      top: '-10px',
      '& .MuiTypography-root': {
        font: 'normal normal bold 100px/150px Segoe UI;',
      },
      '& .MuiTypography-root+.MuiTypography-root': {
        marginTop: theme.spacing(20),
      },
    },
    itemListBox: {
      position: 'absolute',
    },
  })
)

export default useStyles
