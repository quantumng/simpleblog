import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  PageContent
} from './style';

class Page extends Component {
  render () {
    return <Fragment>
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
    pageData: state.pageData
  }
}

export default connect(mapStateToProps)(Page)