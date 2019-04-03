import styled from 'styled-components'
import logoUrl from '../../static/blog-logo.png'
export const HeaderWrapper = styled.div`
  height:58px;
  border-bottom: 1px solid #ddd;
  position: relative;
`
export const Logo = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 50px;
  width: 100px;
  height: 56px;
  background: url(${logoUrl});
  background-size: contain;
`
export const Nav = styled.div`
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  padding-right: 70px;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
`