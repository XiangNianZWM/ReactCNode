// 引入name
import {
  SET_SEARCH_STATUS,
  SET_LOADING_STATUS
} from './actionTypes'

// 设置默认数据
const defaultState = {
  // 搜索栏是否展开
  searchStatus: false,
  // loading是否显示
  loadingStatus: true
}

let reducer = (state = defaultState, action) => {
  // state 为自定义默认值
  // action 为actioncreaturs推送的值
  switch (action.type) {
    // 修改input宽度值
    case SET_SEARCH_STATUS:
      console.log(action)
      return Object.assign({}, state, {
        searchStatus: action.value
      })
    case SET_LOADING_STATUS:
      console.log(action)
      return Object.assign({}, state, {
        loadingStatus: action.value
      })
    default:
      return state
  }
}

export default reducer