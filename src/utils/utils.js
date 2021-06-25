// 公用工具函数库

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
    }
  }
  return type 
}