import http from './http'

export const getMovie = () => {
  return http.request({
    url: '/movie',
    method: 'get'
  })
}

export const getAnotherTwo = () => {
  return http.request({
    url: '/anotherTwo',
    method: 'get'
  })
}