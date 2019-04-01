import categoryApi from '../../../../src/api/category'
import * as actionTypes from './actionTypes'

const initCategoryList = (data) => {
  return {
    action: actionTypes.INIT_CATEGORY_LIST,
    list: data
  }
}

export const getCategoryList = async () => {
  let data = await categoryApi.list()
  return (dispatch) => {
    const action = initCategoryList(data)
    dispatch(action)
  }
}
