import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalComp from './style';
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalComp />
        <Router>
          <div>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/category/:id" component={Home}></Route>
            <Route path="/details/:id" component={Detail}></Route>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
