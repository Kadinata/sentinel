import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  pinInfoContainer: {
    fontFamily: "monospace",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    }
  },
  label: {
    fontFamily: "inherit",
  },
  headerLabel: {
    fontWeight: "bold",
    fontFamily: "inherit",
  },
  powerPinLabel: {
    flex: 1,
    fontFamily: "inherit",
    color: theme.palette.error.light,
  },
  groundPinLabel: {
    flex: 1,
    fontFamily: "inherit",
    color: theme.palette.grey[500],
  },
  miscPinLabel: {
    flex: 1,
    fontFamily: "inherit",
    color: theme.palette.info.light,
  },
  pinMode: {
    fontFamily: "inherit",
    color: props => props.oenable ? theme.palette.warning.light : theme.palette.info.light,
  },
  pinState: {
    fontFamily: "inherit",
    color: props => props.high ? theme.palette.success.light : theme.palette.grey[500],
  },
}));
