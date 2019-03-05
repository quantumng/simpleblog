import React, { Component } from 'react';
import GlobalComp from './style';
import GlobalIcon from './static/iconfont/iconfont';
import Header from './common/header/index.js';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalComp />
        <GlobalIcon />
        <Header />
      </div>
    );
  }
}

export default App;
