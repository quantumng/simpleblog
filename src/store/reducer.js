import { combineReducers } from 'redux-immutable';
import { reducer as asideReducer } from '../common/aside/store';
import { reducer as homeReducer } from '../pages/home/store';
const reducer = combineReducers({
  aside: asideReducer,
  home: homeReducer
})
export default reducer