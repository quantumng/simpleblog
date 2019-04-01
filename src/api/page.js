import http from '@/lib/http';
const baseUrl = '/page'

export default {
  list () {
    return http.get(`${baseUrl}/list`).then(res => res.data)
  },
  detail(id) {
    return http.get(`${baseUrl}?id=${id}`).then(res => res.data)
  }
}