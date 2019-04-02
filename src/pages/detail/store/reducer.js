import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
  data: {}
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PAGE_DATA:
      return state.set('data', action.data)
    default:
      return state
  }
}