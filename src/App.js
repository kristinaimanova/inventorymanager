import React, { Component } from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Theme1, Theme2 } from './themes'
import Main from './main'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={Theme1}>
          <Main />
        </MuiThemeProvider>
    );
  }
}

export default App;
