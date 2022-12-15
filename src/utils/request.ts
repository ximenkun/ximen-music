/*
 * @Author: hekun
 * @LastEdit: hekun
 * @Descripttion:
 * @params:
 * @Date: 2022-08-25 16:16:38
 * @LastEditTime: 2022-10-13 10:24:37
 */

import axios from 'axios'
axios.defaults.withCredentials = true // 允许跨域设置，不然可能因为拿不到cookie而报错
const httpRequest = (config: any) => {
  const baseURL = '/apis' /* 这里的地址就是刚刚启起来的服务器地址  */
  const instance = axios.create({
    // 公用的网络请求路径
    baseURL: baseURL,
    // 网络请求时间超时会自动断开
    timeout: 5000,
    method: 'get',
    withCredentials: true,
  })
  instance.interceptors.request.use(
    (config) => {
      config.data = JSON.stringify(config.data)
      config.headers = {
        'Content-Type': 'application/json',
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  instance.interceptors.response.use(
    function (response) {
      if (response.status === 200) {
        return response.data
      }
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  return instance(config) as any
}

export default httpRequest
