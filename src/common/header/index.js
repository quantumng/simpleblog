import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
// import { toJS } from 'immutable';
import { actionCreator } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Button,
  Addition,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SeachInfoItem,
  SearchInfoList
} from './style';

class Header extends Component {
  getListArea () {
    const { focused, mousedIn, list, page, handleMouseEnter, handleMouseLeave } = this.props
    const curList = []
    const newList = list.toJS()
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      curList.push(<SeachInfoItem key={newList[i]}>{newList[i]}</SeachInfoItem>)
    }
    if (focused || mousedIn) {
      return (
        <SearchInfo
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch>
              {/* <span className="iconfont">&#xe636;</span> */}
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {curList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render () {
    const { focused, handleInputBlur, handleInputFocus } = this.props 
    return (
    <HeaderWrapper>
      <Logo href={'/'} />
      <Nav>
        <NavItem className='left'>首页</NavItem>
        <NavItem className='left'>
          <i className="iconfont">&#xe652;</i>
        下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe637;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
          timeout={200}
          in={focused}
          classNames={'slide'}>
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur = {handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'iconfont focused': 'iconfont'}>&#xe62d;</i>
          {this.getListArea()}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='write'>
          <i className="iconfont">&#xe600;</i>
        写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
  // handleInputFocus () {
  //   this.setState({
  //     focused: true
  //   })
  // }
  // handleInputBlur () {
  //   this.setState({
  //     focused: false
  //   })
  // }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mousedIn: state.get(['header', 'mousedIn']),
    list: state.getIn(['header', 'list']),
    total: state.getIn(['header', 'total']),
    page: state.getIn(['header', 'page'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleMouseEnter () {
      dispatch(actionCreator.mouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreator.mouseLeave())
    },
    handleInputFocus () {
      dispatch(actionCreator.getList())
      dispatch(actionCreator.inputFocus())
    },
    handleInputBlur () {
      dispatch(actionCreator.inputBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);