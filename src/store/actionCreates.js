/*
 * @Author: your name
 * @Date: 2021-06-21 16:44:54
 * @LastEditTime: 2021-07-07 18:49:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\store\actionCreates.js
 */
import {
  SET_SEARCH_STATUS,
  SET_LOADING_STATUS,
  INDEX_GET_LIST,
  SAVE_PAGE_INDEX,
  SAVE_PAGE_TAB,
  SAVE_TAB_INDEX,
  SAVE_TOPCS_CONTENT,
  SAVE_USERINFO,
  SAVE_LOGIN_DIALOG,
  CHANGE_TIPS_STATUS,
  CHANGE_TIPS_TEXT
} from './actionTypes'

import storage from '../utils/storage'

// 引入api
import {
  // 首页列表请求
  getTopics,
  // 文章详情请求
  getTopicsInfo,
  // 登录
  postAccesstoken
} from '../server/api'

// 控制搜索栏是否展示
export const searchStatusAction = (value) => ({
  type: SET_SEARCH_STATUS,
  value
})

// 控制loading是否显示
export const loadingStatusAction = (value) => ({
  type: SET_LOADING_STATUS,
  value
})

// 获取首页数据action
export const getListAction = (data) => ({
  type: INDEX_GET_LIST,
  data
})

// 修改页码
export const changePageIndexAction = (value) => ({
  type: SAVE_PAGE_INDEX,
  value
})

// 保存频道页
export const changeTabDataAction = (value) => ({
  type: SAVE_PAGE_TAB,
  value
})

// 保存频道页tabindex
export const changeTabIndexAction = (index) => ({
  type: SAVE_TAB_INDEX,
  index
})


// 获取文章页数据
export const getTopcsContentData = (value) => ({
  type : SAVE_TOPCS_CONTENT,
  value
})

// 保存用户登录信息
export const saveLoginUserInfoAction = (value) => ({
  type: SAVE_USERINFO,
  value
})

// 保存登录弹窗状态
export const saveLoginDialogAction = (value) => ({
  type: SAVE_LOGIN_DIALOG,
  value
})

// tips显示
export const changeTipStatusAction = (value) => ({
  type: CHANGE_TIPS_STATUS,
  value
})
// tips 文字
export const changeTipTextAction = (value) => ({
  type: CHANGE_TIPS_TEXT,
  value
})


// 中间件获取数据
// 利用中间件获取首页数据
export const getHomeData = (props) => {
  return async (dispatch) => {
    const res = await getTopics(
      props.page,
      props.tab,
      props.limit,
      props.mark
    )
    let data = JSON.parse(JSON.stringify(res.data))
    // 热门回复
    const hot = res.data.sort((a, b) => {
      return b.visit_count - a.visit_count
    })
    // 冷门回复
    const cold = JSON.parse(JSON.stringify(hot)).reverse()
    // 活跃用户
    const user = res.data.filter((item, index) => {
      return index < 12
    })
    const obj = {
      all: data,
      hot: hot,
      cold: cold,
      user: user
    }
    const action = getListAction(obj)
    dispatch(action)
  }
}


// 利用中间件获取文章详情数据
export const getTopicInfoData = (id) => {
  return async (dispatch) => {
    const res = await getTopicsInfo(id)
    const action = getTopcsContentData(res.data)
    dispatch(action)
  }
}

// 利用中间件获取用户登录信息
export const getLoginUserInfo = (token) => {
  console.log(token)
  return async (dispatch) => {
    const res = await postAccesstoken(token)
    console.log(res)
    // 如果登录成功
    if (res && res.success) {
      // 用户信息保存至sessionStorage
      storage.setSession('userInfo', { ...res, token})
      // 同时保存至redux
      const action = saveLoginUserInfoAction({ ...res, token })
      dispatch(action)
      // 修改登录弹窗状态
      const actionLoginStatus = saveLoginDialogAction(false)
      dispatch(actionLoginStatus)
    }
    
  }
}