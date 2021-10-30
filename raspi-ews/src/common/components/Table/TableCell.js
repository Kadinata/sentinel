import { withStyles } from '@material-ui/core';
import { TableCell } from '@material-ui/core';

export default withStyles((theme) => ({
  root: {
    color: 'inherit',
    border: 'none',
    padding: theme.spacing(2) / theme.spacing(1),
  },
}))(TableCell);