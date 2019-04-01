import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  mousedIn: false,
  list: [],
  page: 1,
  total: 5
})
export default (state  = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_FOCUS: 
     return state.set('focused', true)
    case actionTypes.INPUT_BLUR:
      return state.set('focused', false)
    case actionTypes.MOUSE_ENTER:
      return state.set('mousedIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mousedIn', false)
    case actionTypes.SET_LIST:
      return state.set('list', action.list)
    default:
      return state
  }
}
