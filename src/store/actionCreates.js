import {
  SET_SEARCH_STATUS,
  SET_LOADING_STATUS
} from './actionTypes'

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

