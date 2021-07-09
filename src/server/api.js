/*
 * @Author: your name
 * @Date: 2021-06-22 14:54:07
 * @LastEditTime: 2021-07-09 15:54:02
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
 *  页码 page, 
 *  主题分类 tab, 
 *  每页数量 limit, 是
 *  否出现所有markdown格式文本 默认为true
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

// 主题详情
export const getTopicsInfo = (
  id
) => {
  return server({
    url: `/topic/${id}`,
    method: 'GET'
  })
}

// 用户登录
export const postAccesstoken = (
  token
) => {
  return server({
    url: '/accesstoken',
    method: 'POST',
    data: {
      accesstoken: token
    }
  })
}

// 新建评论
export const postNewReplies = (
  // token
  accesstoken,
  // 内容
  content,
  // id, 如果是对另一个评论的回复，要带上此字段
  topic_id
) => {
  return server({
    url: `/topic/${topic_id}/replies`,
    method: 'POST',
    data: {
      accesstoken,
      content
    }
  })
}

// 为评论点赞
export const postReplyUps = (
  accesstoken,
  // 评论id
  reply_id
) => {
  return server({
    url: `/reply/${reply_id}/ups`,
    method: 'POST',
    data: {
      accesstoken
    }
  })
}

 // 用户最近收藏话题
export const getUserCollect = (
  loginname
) => {
  return server({
    url: `/topic_collect/${loginname}`,
    method: 'GET'
  })
}


// 收藏主题
export const postTopicCollect = (
  // token
  accesstoken,
  // 主题id
  topic_id
) => {
  return server({
    url: '/topic_collect/collect',
    method: 'POST',
    data: {
      accesstoken,
      topic_id
    }
  })
}

// 取消收藏主题
export const postTopicUnCollect = (
  accesstoken,
  topic_id
) => {
  return server({
    url: '/topic_collect/de_collect',
    method: 'POST',
    data: {
      accesstoken,
      topic_id
    }
  })
}

// 发表新话题
 export const postTopics = (
   // token
   accesstoken,
   // 标题
   title,
   // tab, 分类，暂时只提供客户端测试发帖
   tab,
   // 主题内容
   content
 ) => {
   return server({
     url: '/topics',
     method: 'POST',
     data: {
       accesstoken,
       title,
       tab,
       content
     }
   })
 }

 // 用户详情
 export const getUserInfo = (
   // 用户名
   loginname
 ) => {
   return server({
     url: `/user/${loginname}`,
     method: 'GET'
   })
 }
