import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  BreadNav,
  PageContent
} from './style';

class Page extends Component {
  render () {
    return <Fragment>
      <BreadNav></BreadNav>
      <PageContent></PageContent>
    </Fragment>
  }
}
const mapStateToProps = (state) => {
  return {
    pageData: state.pageData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPageData: () => {
      
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page)