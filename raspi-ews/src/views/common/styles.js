import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  viewRoot: {
    display: 'flex',
    flex: 1,
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
  },
  widgetContainer: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    }
  },
}));