import pageApi from '../../../../src/api/page'
import * as actionTypes from './actionTypes'

const initPageData = (data) => {
  return {
    action: actionTypes.INIT_PAGE_DATA,
    data
  }
}

export const getPageData = async () => {
  let data = await pageApi.detail()
  return (dispatch) => {
    const action = initPageData(data)
    dispatch(action)
  }
}
