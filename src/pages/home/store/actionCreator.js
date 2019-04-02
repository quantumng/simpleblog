import pageApi from '../../../../src/api/page'
import categoryApi from '../../../../src/api/category'
import * as actionTypes from './actionTypes'

export const initPageList = (data) => {
  return {
    action: actionTypes.INIT_PAGE_LIST,
    list: data
  }
}

export const getPageList = async () => {
  let data = await pageApi.list()
  return (dispatch) => {
    const action = initPageList(data)
    dispatch(action)
  }
}

export const initCategoryList = (data) => {
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
