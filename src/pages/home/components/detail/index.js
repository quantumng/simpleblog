import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../../../home/store/actionCreator';
import {
  BreadNav,
  PageContent
} from './style';

class Page extends Component {
  componentDidMount () {
    this.props.getPageData()
  }
  render () {
    return <Fragment>
      <BreadNav></BreadNav>
      <PageContent>
        <div className={'title'}></div>
        <div className={'content'}>
          <a href={'/'} className={'read-more'}>阅读更多</a>
        </div>
        <div className={'info'}>
          <div className={'author'}></div>
          <div className={'comment'}></div>
        </div>
      </PageContent>
    </Fragment>
  }
}
const mapStateToProps = (state) => {
  return {
    pageData: state.getIn(['home', 'pageData'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPageData: () => {
      const action = actionCreator.getPageData()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)