import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actionCreator from '../../../home/store/actionCreator';
import {
  PageContent,
  LoadMore
} from './style';

function Content (props) {
  const { data } = props
  const { title, desc, author, comment } = data
  const commentCount = comment.length
  const authorName = author.nickname
  return <div>
    <div className={'title'}>{title}</div>
    <div className={'content'}>
    {desc}
      <a href={'/'} className={'read-more'}>阅读更多</a>
    </div>
    <div className={'info'}>
      <span className={'author'}>作者：{authorName}</span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span className={'comment'}>评论：{commentCount}</span>
    </div>
  </div>
}

class Page extends Component {
  componentDidMount () {
    this.getList()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      console.log(nextProps)
      this.getList()
    }
  }
  getList () {
    const { match, getPageList } = this.props
    const { params } = match
    getPageList(params)
  }
  render () {
    const { pageList, getMoreList, currentPage, hasMorePage } = this.props
    if (pageList.length) {
      return <div>
        {pageList.map(item => {
        return <PageContent key={item._id}>
          <Content data={item} />
        </PageContent>
      })}
        {hasMorePage ? <LoadMore onClick={() => {getMoreList(currentPage)}}>加载更多...</LoadMore> : <LoadMore>没有更多文章了</LoadMore>}
      </div>
    } else {
      return <div>没有文章</div>
    }
  }
}
const mapStateToProps = (state) => {
  return {
    hasMorePage: state.getIn(['home', 'hasMorePage']),
    currentPage: state.getIn(['home', 'currentPage']),
    pageList: state.getIn(['home', 'pageList'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getPageList: (params) => {
      const action = actionCreator.getPageList(params)
      dispatch(action)
    },
    getMoreList: (params) => {
      const action = actionCreator.getMoreList(params)
      dispatch(action)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page))