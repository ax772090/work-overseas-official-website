/* eslint-disable camelcase */
// import service from '@/utils/request'

// import axios from 'axios'
// export function IPlocation (data) {
//   return service({
//     url: 'http://ip.taobao.com/service/getIpInfo.php',
//     method: 'post',
//     params: data
//   })
// }

// function isChinese (temp) {
//   var re = /[^/u4e00-/u9fa5]/
//   if (re.test(temp)) return false
//   return true
// }

export function IPlocation (objectData) {
  // service('GET', 'apiip/service/getIpInfo.php', objectData)
  // service('GET', 'apiip2/service/getIpInfo.php', objectData)
  // return service('GET', 'http://ip.taobao.com/service/getIpInfo.php', objectData)
}

// export function IPlocation (params) {
//   return axios.get({
//     baseURL: 'http://ip.taobao.com/',
//     url: 'http://ip.taobao.com/service/getIpInfo.php',
//     params: params
//   }).then(({
//     data
//   }) => {
//     return Promise.resolve(data)
//   })
// }
