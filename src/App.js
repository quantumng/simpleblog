import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalComp from './style';
import GlobalIcon from './static/iconfont/iconfont';
import Header from './common/header/index.js';
import Asider from './common/aside/index.js';
import Home from './pages/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalComp />
        <GlobalIcon />
        <Header />
        <Asider />
        <Home></Home>
      </Provider>
    );
  }
}

export default App;
