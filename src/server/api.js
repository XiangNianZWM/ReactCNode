/*
 * @Author: your name
 * @Date: 2021-06-22 14:54:07
 * @LastEditTime: 2021-06-23 17:33:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import server from './index'

// 接口格式如下
// export const testApi = (params) => {
//   return server({
//     url: '/api',
//     method: 'GET',
//     // params 会显示到url里, data不会显示到url里
//     params: {
//       params
//     }
//   })
// }

/*
 * @description: 首页列表函数
 * @param {
 *  页码 page, 主题分类 tab, 每页数量 limit, 是否出现所有markdown格式文本 默认为true
 * }
 * @return {*}
 */
export const getTopics = (
  page,
  tab,
  limit,
  mdrender
) => {
  return server({
    url: '/topics',
    method: 'GET',
    params: {
      page,
      tab,
      limit,
      mdrender
    }
  })
}