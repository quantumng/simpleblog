import categoryApi from '../../../../src/api/category'
import * as actionTypes from './actionTypes'

export const initCategoryList = (data) => {
  return {
    action: actionTypes.INIT_CATEGORY_LIST,
    list: data
  }
}

export const getCategoryList = () => {
  return async (dispatch) => {
    let data = await categoryApi.list()
    const action = initCategoryList(data)
    dispatch(action)
  }
}
