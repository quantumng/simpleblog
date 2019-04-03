import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as actionCreator from '../home/store/actionCreator';
import PageItem from './components/pageItem';
import Details from './components/detail';
import {
  HomeWrapper,
  BackTop
} from './style';
class Home extends Component {
  handleScrollTop () {
    window.scrollTo(0, 0)
  }
  componentDidMount () {
    this.bindEvents()
  }
  componentWillUnmount () {
    window.releaseEvents('scroll', this.props.changeScrollTopShow)
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  render () {
    return (<HomeWrapper>
      <div>
        <Route path={'/'} exact component={PageItem}></Route>
        <Route path={'/category/:id'} exact component={PageItem}></Route>
        <Route path={"/details/:id"} exact component={Details}></Route>
      </div>
      { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
    </HomeWrapper>)
  }
}
const mapStateToProps = state => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeScrollTopShow (e) {
      if (document.documentElement.scrollTop > 200) {
        const action = actionCreator.toggleTopShow(true)
        dispatch(action)
      } else {
        const action = actionCreator.toggleTopShow(false)
        dispatch(action)
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
