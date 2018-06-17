import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextSharing from './components/TextSharing';
import registerServiceWorker from './registerServiceWorker';
import AppFrame from './components/AppFrame';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/muiTheme';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppFrame>
      <TextSharing />
    </AppFrame>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
