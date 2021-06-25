// 引入name
import {
  SET_SEARCH_STATUS,
  SET_LOADING_STATUS,
  INDEX_GET_LIST,
  SAVE_PAGE_INDEX
} from './actionTypes'

// 设置默认数据
const defaultState = {
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
      console.log(action)
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
    
    // 设置页码
    case SAVE_PAGE_INDEX:
      console.log(action)
      return Object.assign({}, state, {
        pageIndex: action.value - 1
      })
    default:
      return state
  }
}

export default reducer