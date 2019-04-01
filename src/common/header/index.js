import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { toJS } from 'immutable';
// import { actionCreator } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
} from './style';

class Header extends Component {
  render () { 
    return (
    <HeaderWrapper>
      <Logo href={'/'} />
      <Nav>
        <NavItem className='left'>首页</NavItem>
        <NavItem className='left'>关于我</NavItem>
        <NavItem className='right'>登录</NavItem>
      </Nav>
    </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);