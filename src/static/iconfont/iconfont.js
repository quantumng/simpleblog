import { createGlobalStyle } from 'styled-components';
const globalIcon = createGlobalStyle`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1551702419689'); /* IE9 */
  src: url('./iconfont.eot?t=1551702419689#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1551702419689') format('woff'),
  url('./iconfont.ttf?t=1551702419689') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1551702419689#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  .iconheart:before {
  content: "\e751";
  }

  .iconapp1:before {
  content: "\e652";
  }

  .iconrefresh:before {
  content: "\e636";
  }

  .iconcomment:before {
  content: "\e6c7";
  }

  .iconAa:before {
  content: "\e637";
  }

  .iconpenleather:before {
  content: "\e600";
  }

  .icondiamond:before {
  content: "\e622";
  }

  .iconyanjizhushou-shangchuan_zhinanzhen:before {
  content: "\e634";
  }

  .iconarrow:before {
  content: "\e70a";
  }

  .iconMagnifier:before {
  content: "\e62d";
  }
`
export default globalIcon
