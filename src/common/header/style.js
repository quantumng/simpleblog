import styled from 'styled-components';
import logoUrl from '../../static/nav-logo-4c7bbafe27adc892f3046e6978459bac.png';
export const HeaderWrapper = styled.div`
  height:58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`
export const Logo = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  background: url(${logoUrl});
  background-size: contain;
`
export const Nav = styled.div`
  width: 80%;
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
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin: 9px 0 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin: 9px 20px 0 0;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: red;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`
