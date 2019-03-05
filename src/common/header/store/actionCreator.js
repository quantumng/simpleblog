import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
export const inputBlur = () => ({ type: actionTypes.INPUT_BLUR })
export const inputFocus = () => ({ type: actionTypes.INPUT_FOCUS})
export const setList = (list) => {
  return {
    type: actionTypes.SET_LIST,
    list: fromJS(list)
  }
}
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data.data
      dispatch(setList(data))
    })
  }
}
export const mouseEnter = () => ({ type: actionTypes.MOUSE_ENTER })
export const mouseLeave = () => ({ type: actionTypes.MOUSE_LEAVE })
