import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalComp from './style';
import GlobalIcon from './static/iconfont/iconfont';
import Header from './common/header/index.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalComp />
        <GlobalIcon />
        <Header />
      </Provider>
    );
  }
}

export default App;
