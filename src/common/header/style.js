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
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin: 9px 0 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &.focused {
    width: 240px;
  }
  &::placeholder {
    color: #999;
  }
  &.slide-enter, .slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
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
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`
export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  .iconfont {
    display: inline-block;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SeachInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  line-height: 20px;
  padding: 0 5px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  margin: 10px 5px;
`