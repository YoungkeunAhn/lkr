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
    },
    bgText: {
      color: 'rgba(167,167,167,0.2)',
      '& .MuiTypography-root': {
        font: 'normal normal bold 160px/300px Segoe UI;',
      },
    },
  })
)

export default useStyles
