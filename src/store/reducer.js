/*
 * @Author: your name
 * @Date: 2021-06-21 16:37:15
 * @LastEditTime: 2021-07-09 16:34:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\store\reducer.js
 */
// 引入name
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

// 设置默认数据
const defaultState = {
  // 当前用户信息
  userInfoData: {},
  // 用户登录弹窗
  isLoginDialog: false,
  // 搜索栏是否展开
  searchStatus: false,
  // loading是否显示
  loadingStatus: true,
  // 首页数据
  allIndexData: [],
  // 热门话题
  hotIndexData: [],
  // 冷门话题
  coldIndexData: [],
  // 活跃用户
  userIndexData: [],
  // 页码
  pageIndex: 0,
  // 频道页数据
  pageTab: 'all',
  // 频道页inedx
  tabIndex: 0,
  // 文章页数据
  topcsContent: {},
  // tips
  tipsStatus: false,
  // tips text
  tipsText: ''
}

let reducer = (state = defaultState, action) => {
  // state 为自定义默认值
  // action 为actioncreaturs推送的值
  switch (action.type) {
    // 修改input宽度值
    case SET_SEARCH_STATUS:
      return Object.assign({}, state, {
        searchStatus: action.value
      })
    // 修改loading状态
    case SET_LOADING_STATUS:
      return Object.assign({}, state, {
        loadingStatus: action.value
      })
    // 获取首页数据
    case INDEX_GET_LIST:
      return Object.assign({}, state, {
        // 所有数据
        allIndexData: action.data.all,
        // 热门回复
        hotIndexData: action.data.hot,
        // 冷门话题
        coldIndexData: action.data.cold,
        // 活跃用户
        userIndexData: action.data.user
      })
    // 保存频道页数据
    case SAVE_PAGE_TAB:
      return Object.assign({}, state, {
        pageTab: action.value
      })
    // 保存频道页tabindex
    case SAVE_TAB_INDEX:
      return Object.assign({}, state, {
        tabIndex: action.index
      })
    // 保存文章页数据
    case SAVE_TOPCS_CONTENT:
      return Object.assign({}, state, {
        topcsContent: action.value
      })

    // 设置页码
    case SAVE_PAGE_INDEX:
      return Object.assign({}, state, {
        pageIndex: action.value - 1
      })

    // 保存登录弹窗状态
    case SAVE_LOGIN_DIALOG:
      return Object.assign({}, state, {
        isLoginDialog: action.value
      })
    
    // 保存用户登录信息
    case SAVE_USERINFO:
      return Object.assign({}, state, {
        userInfoData: action.value
      })


    // 修改tips状态
    case CHANGE_TIPS_STATUS:
      return Object.assign({}, state, {
        tipsStatus: action.value
      })

    // 修改tips文字
    case CHANGE_TIPS_TEXT:
      return Object.assign({}, state, {
        tipsText: action.value
      })

    default:
      return state
  }
}

export default reducer