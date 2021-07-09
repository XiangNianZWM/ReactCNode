/*
 * @Author: your name
 * @Date: 2021-06-25 15:11:47
 * @LastEditTime: 2021-07-08 17:43:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\utils\utils.js
 */
// 公用工具函数库

import store from '../store'
import storage from '../utils/storage'
import {
  saveLoginDialogAction
} from '../store/actionCreates'
// 根据类型获取中文
export const transTypes = (top, good, value) => {
  let type = ''
  if (top) {
    type = '置顶'
  } else if (good) {
    type = '精华'
  } else {
    switch (value) {
      case 'all':
        type = '全部'
        break
      case 'good':
        type = '精华'
        break
      case 'share':
        type = '分享'
        break
      case 'ask':
        type = '问答'
        break
      case 'job':
        type = '招聘'
        break
      case 'dev':
        type = '客户端测试'
        break
      default:
        type = ''
    }
  }
  return type 
}

// 换算时间, 格式，几日前
export const transTime = (time) => {
  if (!time) {
    return false
  }

  // 先定义1分钟，1小时，1天，1年，
  // 1分钟
  const min = 60 * 1000
  // 1小时
  const hour = 60 * min
  // 1天
  const day = 24 * hour
  // 1个月
  const month = 30 * day
  // 1年
  const year = 12 * month
  // 转换时间
  let t = new Date(time)
  // 现在时间减去以前的时间 = 差值
  let diff = new Date().getTime() - t
  // 定义字符串，用来存放最后的返回值
  let obj = ''
  // 如果差值year的毫秒数，则属于
  if (diff > year) {
    let n = Math.floor(diff / year)
    obj = `${n} 年前`
  } else if (diff > month) {
    let n = Math.floor(diff / month)
    obj = `${n} 个月前`
  } else if (diff > day) {
    let n = Math.floor(diff / day)
    obj = `${n} 天前`
  } else if (diff > hour) {
    let n = Math.floor(diff / hour)
    obj = `${n} 小时前`
  } else if (diff > min) {
    let n = Math.floor(diff / min)
    obj = `${n} 分钟前`
  } else {
    obj = '刚刚'
  }
  return obj
}

// 判断是否登录
export const isLoginFunc = () => {
  if (storage.getSession('userInfo') || store.getState().userInfoData?.id) {
    return true
  } else {
    let action = saveLoginDialogAction(true)
    store.dispatch(action)
  }
}