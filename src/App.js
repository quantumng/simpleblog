import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import GlobalComp from './style';
import GlobalIcon from './static/iconfont/iconfont';
import Header from './common/header/index.js';
import Home from './pages/home';
import Details from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalComp />
        <GlobalIcon />
        <Header />
        <BrowserRouter>
          <div>
            <Route path={'/'} exact component={Home}></Route>
            <Route path="/details" exact component={Details}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
