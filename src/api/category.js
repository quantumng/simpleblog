import http from '../lib/http'
const baseUrl = '/category'

export default {
  list () {
    return http.get(`${baseUrl}/list`).then(res => res.data)
  }
}