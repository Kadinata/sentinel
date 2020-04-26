import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(33, 33, 64, 0.7)',
    },
    background: {
      paper: 'rgba(0, 0, 26, 0.35)',
      default: 'rgb(41, 41, 61, 1.0)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    text: {
      primary: '#E9E9E9',
    },
  },
});

export default responsiveFontSizes(Theme);