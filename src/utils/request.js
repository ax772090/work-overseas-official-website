// import axios from 'axios'

// // 创建axios 实例
// const service = axios.create({
//   baseURL: process.env.BASE_API,
//   timeout: 5000
// })

// // request 拦截器
// service.interceptors.request.use(
//   config => {
//     // Promise.resolve(config)
//     return config
//   },
//   error => {
//     Promise.reject(error)
//   }
// )

// // response 拦截器
// service.interceptors.response.use(
//   response => {
//     const res = response.data
//     return res
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// export default service

import axios from 'axios'
import qs from 'qs'
// 在config.js文件中统一存放一些公共常量，方便之后维护
// import {
//   baseURL
// } from './config.js'

var http = axios.create({
  baseURL: 'http://ip.taobao.com/',
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // 'Content-Type': 'application/json; charset=utf-8',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept',
    // 'Access-Control-Allow-Methods': 'GET,POST, OPTIONS, get'
  }
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 显示loading
  return config
}, function (error) {
  // 请求错误时弹框提示，或做些其他事
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

// 封装数据返回失败提示函数
// function errorState (response) {
//   if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
//     return response
//   } else {
//     alert('数据获取错误')
//   }
// }

// 封装数据返回成功提示函数
// function successState (res) {
//   if (res.data.code === '000000') {
//     alert('success')
//     return res
//   }
// }

// 封装axios--------------------------------------------------------------------------------------
var service = function apiAxios (method, url, params) {
  let httpDefault = {
    method: method,
    // baseURL: baseURL,
    url: url,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    timeout: 10000
  }

  return new Promise((resolve, reject) => {
    http(httpDefault)
      .then((res) => {
        // successState(res)
        resolve(res)
      }).catch((response) => {
        // errorState(response)
        reject(response)
      })
  })
}

export default service
