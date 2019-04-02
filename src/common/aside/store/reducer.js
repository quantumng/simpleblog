import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  categoryList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CATEGORY_LIST:
      return state.set('categoryList', action.list)
    default:
      return state
  }
}