import React, { Component } from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Button,
  Addition
} from './style';
class Header extends Component {
  render () {
    return (
    <HeaderWrapper>
      <Logo href={'/'} />
      <Nav>
        <NavItem className='left'>首页</NavItem>
        <NavItem className='left'>
          <i className="iconfont">&#xe751;</i>
        下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>Aa</NavItem>
        <NavSearch></NavSearch>
      </Nav>
      <Addition>
        <Button className='write'>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
}

export default Header;