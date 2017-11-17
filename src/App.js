import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import allReducers from './reducers';

import { createMuiTheme, withTheme, MuiThemeProvider } from 'material-ui/styles';
import { cyan } from 'material-ui/colors/cyan';
import { purple, green, red, yellow } from 'material-ui/colors';

import ButtonAppBar from './components/Header/header';
import ScrollableTabsButtonAuto from './components/Tab/tab';
import TemporaryDrawer from './components/Drawer/drawer';
// import logo from './logo.svg';
import './App.css';

// const logger = createLogger();
// const store = createStore(
//   allReducers,
//   applyMiddleware(thunk, promise, logger)
// );


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red,
  },
  status: {
    danger: 'orange',
  },
});


class App extends Component {
  render() {




    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React EYI</h1>
        </header> */}
          {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
          <TemporaryDrawer></TemporaryDrawer>
          <ButtonAppBar></ButtonAppBar>
          {/* <ScrollableTabsButtonAuto></ScrollableTabsButtonAuto> */}
        </div>
      </MuiThemeProvider>
    );
  }
}


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , document.getElementById('root'));
export default App;

// export default withStyles(styles)(App);
