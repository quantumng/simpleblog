import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const { categoryList } = this.props
    return (
        <HomeRight>
        <CategoryWrapper>
          <h2 className={'title'}>分类目录</h2>
          { categoryList.map(item => {
            return (
              <CategoryItem key={item._id}>
                  <Link to={{
                    pathname: `/category/${item._id}`
                  }}>{`${item.name}(${item.pages.length})`}</Link>
              </CategoryItem>
            )
          }) }
        </CategoryWrapper>
      </HomeRight>
    );
  }
}
const mapStateToProps = state => {
  return {
    categoryList: state.getIn(['aside', 'categoryList'])
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