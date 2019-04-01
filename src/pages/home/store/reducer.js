import * as actionTypes from './actionTypes';
const defaultState = {
  list: []
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CATEGORY_LIST:
      return state.set('list', action.list)
    default:
      return state
  }
}