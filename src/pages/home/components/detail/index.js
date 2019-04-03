import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreator from '../../../home/store/actionCreator';
import {
  PageContent
} from './style';

class Page extends Component {
  render () {
    const { pageData } = this.props
    const { title, content, author, category } = pageData
    const { nickname } = author
    const { name } = category
    const createSetup = (content) => {
      return {__html: content}
    }
    if (nickname) {
      return <Fragment>
        <PageContent>
          <div className={'title'}>{title}</div>
          <div className={'info'}>
            <span className={'author'}>作者：{nickname}</span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span className={'comment'}>分类：{name}</span>
          </div>
          <div className={'content'}>
          <div dangerouslySetInnerHTML={createSetup(content)}></div>
          </div>
        </PageContent>
      </Fragment>
    }
  }
  componentDidMount () {
    const { match: { params: { id } }, getPageData } = this.props
    getPageData(id)
  }
}
const mapStateToProps = (state) => {
  return {
    pageData: state.getIn(['home', 'pageData'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPageData: (params) => {
      const action = actionCreator.getPageData(params)
      dispatch(action)
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page))