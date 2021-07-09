/*
 * @Author: your name
 * @Date: 2021-06-22 14:15:48
 * @LastEditTime: 2021-07-07 16:25:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\server\index.js
 */
import axios from 'axios'
// 引入store
import store from '../store'
import {
  loadingStatusAction,
  changeTipStatusAction,
  changeTipTextAction
} from '../store/actionCreates'
// 是否允许携带验证
axios.defaults.withCredentials = true

// 创建axios实例
const server = axios.create({
  // 接口地址
  // 发布环境
  // baseURL: process.env.API_ROOT
  // 开发环境
  baseURL: '/',
  // 响应时长
  timeout: 30000,
  // 请求头
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
})


// 请求拦截器
server.interceptors.request.use(config => {
  const action = loadingStatusAction(true)
  store.dispatch(action)
  // 请求数据之前的操作，例如添加遮罩
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
server.interceptors.response.use(res => {
  // 响应数据之后的操作，例如取消遮罩
  const action = loadingStatusAction(false)
  store.dispatch(action)
  return res.data
}, err => {
  const actionStatus = changeTipStatusAction(true)
  const actionText = changeTipTextAction(JSON.parse(err.request.responseText).error_msg)
  store.dispatch(actionStatus)
  store.dispatch(actionText)
  return Promise.reject(err)
})

export default server