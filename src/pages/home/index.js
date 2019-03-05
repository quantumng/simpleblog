import React, { Component } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  // Topic,
  // List,
  // Recommend,
  // Writer
  // BackTop
} from './style';
class Home extends Component {
  render () {
    return (<HomeWrapper>
      <HomeLeft>
        <div className='banner-img'></div>
        {/* <Topic />
        <List /> */}
      </HomeLeft>
      <HomeRight>
        {/* <Recommend /> */}
        {/* <Writer /> */}
      </HomeRight>
      {/* { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null} */}
    </HomeWrapper>)
  }
}

export default Home