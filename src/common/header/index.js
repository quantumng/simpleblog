import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  getListArea (show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch>
              {/* <span className="iconfont">&#xe636;</span> */}
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SeachInfoItem>历史</SeachInfoItem>
            <SeachInfoItem>历史</SeachInfoItem>
            <SeachInfoItem>历史</SeachInfoItem>
            <SeachInfoItem>历史</SeachInfoItem>
            <SeachInfoItem>历史</SeachInfoItem>
            <SeachInfoItem>历史</SeachInfoItem>
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
          {this.getListArea(focused)}
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
    focused: state.getIn(['header', 'focused'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreator.inputFocus())
    },
    handleInputBlur () {
      dispatch(actionCreator.inputBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);