import {
  SET_SEARCH_STATUS,
  SET_LOADING_STATUS,
  INDEX_GET_LIST,
  SAVE_PAGE_INDEX
} from './actionTypes'

// 引入api
import {
  // 首页列表请求
  getTopics
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

// 获取数据action
export const getListAction = (data) => ({
  type: INDEX_GET_LIST,
  data
})

// 修改页码
export const changePageIndexAction = (value) => ({
  type: SAVE_PAGE_INDEX,
  value
})


// 利用中间件获取数据
export const getHomeData = (props) => {
  return async (dispatch) => {
    const res = await getTopics(
      props.page,
      props.tab,
      props.limit,
      props.mark
    )
    console.log(res)
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
