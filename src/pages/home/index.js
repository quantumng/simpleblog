import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actionCreator from '../home/store/actionCreator';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  CategoryWrapper,
  CategoryItem,
  LoadMore,
  BackTop
} from './style';
class Home extends Component {
  componentDidMount () {
  }
  render () {
    return (<HomeWrapper>
      <HomeLeft>
        <LoadMore></LoadMore>
      </HomeLeft>
      <HomeRight>
        <CategoryWrapper>
          <CategoryItem></CategoryItem>
        </CategoryWrapper>
      </HomeRight>
      { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
    </HomeWrapper>)
  }
}
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatct => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
