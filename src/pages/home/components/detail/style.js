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
    border-bottom: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
  }
`