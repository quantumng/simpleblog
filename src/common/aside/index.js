import React from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import {
  HomeRight,
  CategoryWrapper,
  CategoryItem
} from './style';

class Asider extends React.Component {
  componentDidMount () {
    this.props.getCategoryList()
  }
  render() {
    return (
        <HomeRight>
        <h3>分类目录</h3>
        <CategoryWrapper>
          <CategoryItem></CategoryItem>
        </CategoryWrapper>
      </HomeRight>
    );
  }
}
const mapStateToProps = state => {
  return {
    // categoryList: state.get('categoryList', )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCategoryList: () => {
      const action = actionCreator.getCategoryList()
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Asider);