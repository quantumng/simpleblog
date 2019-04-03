import styled from 'styled-components';

export const PageContent = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 20px auto;
  box-sizing: border-box;
  .title {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .content {
    line-height: 30px;
    margin: 20px 0;
    padding: 10px;
    text-index: 2em;
    .read-more {
      margin-left: 10px;
    }
  }
  .info {
    padding: 10px;
    border-top: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
  }
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px auto;
  text-align:center;
  border: 1px solid #ddd;
	border-radius: 20px;
	cursor: pointer;
`