/*
 * @Author: your name
 * @Date: 2021-06-29 19:51:29
 * @LastEditTime: 2021-07-09 10:26:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\pages\ListInfo.js
 */
import React, { Component, Fragment } from 'react';
// import store from '../../store'

// react-redux
import { connect } from 'react-redux'
// 引入工具函数
import { transTypes, transTime } from '../../utils/utils'
// 引入组件
// 关于作者
import AboutAuthor from '../../components/AboutAuthor';
// 客户端下载
import DownClient from '../../components/DownClient'
// 回复
import ReplyCon from '../../components/ReplyCon'
// 引入公用函数或者中间件
import {
  // 获取文章详情数据
  getTopicInfoData
} from '../../store/actionCreates'
// Loading
import Loading from '../../components/Loading'

// api
import {
  // 收藏主题
  postTopicCollect,
  // 取消收藏主题
  postTopicUnCollect
} from '../../server/api'

import {
  // 判断是否登录
  isLoginFunc
} from '../../utils/utils'

class ListInfo extends Component {
  render() {
    let { topcsContent, getData }  = this.props
    return ( 
      <Fragment>
        {/* {this.state.id} */}
        <div className = 'fl'>
          <div className = 'box listInfo'>
            {
              this.props.topcsContent.id !== this.props.match.params.id ? (
                <Loading />
              ) : (
                <Fragment>
                  <h3>
                    {topcsContent.title}
                  </h3>
                  <div className='author'>
                    <span className='at'>
                      <i>
                        <img src={topcsContent.author?.avatar_url} alt='' />
                      </i>
                      {topcsContent.author?.loginname}
                    </span>
                    <span className='review'>
                      {topcsContent.visit_count} 次阅读
                    </span>
                    <span className='time'>
                      {transTime(topcsContent.create_at)}
                    </span>
                    <span className='tab'>
                      {transTypes('', '', topcsContent.tab)}
                    </span>
                  </div>
                  <div className='listContent'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: topcsContent.content
                      }}
                    >

                    </div>
                  </div>
                  <div className='shouc'>
                    {
                        topcsContent.is_collect ? 
                        (
                          <Fragment>
                            <span onClick = {() => {
                                this.unCollectHandle(topcsContent.id)
                            }}>
                                <i className='iconfont icon-shoucang1'>
                              </i>
                            </span>
                            <p>
                              已收藏
                            </p>
                          </Fragment>
                        )
                        :
                        (
                            <Fragment>
                              <span onClick={() => {
                                this.collectHandle(topcsContent.id)
                              }}>
                                <i className='iconfont icon-shoucang'>
                                </i>
                              </span>
                              <p>
                                收藏主题
                              </p>
                            </Fragment>
                        )
                    }
                    
                  </div>
                </Fragment>
              )
            }
          </div>
          {/* 回复 */}
          <ReplyCon
            dataJson={topcsContent.replies}
            id={topcsContent.id}
            getData={getData}
          />
        </div>
        <div className = 'fr'>
          <div className = 'box'>
            <div className='title'>
              <i className='iconfont icon-yonghu'></i>
              关于作者
            </div>
            <AboutAuthor
              dataJson={topcsContent.author}
              point={topcsContent.visit_count}
            />
          </div>
          {/* 客户端下载 */}
          <DownClient />
        </div>
      </Fragment>
     );
  }
  componentDidMount() {
    let id = this.props.match.params.id
    this.setState({
      id: id
    })
    this.props.getData(id)
  }

  // 收藏主题
  collectHandle(id) {
    if (isLoginFunc()) {
      this.collectData(this.props.userInfoData?.token, id)
    } 
    
  }
  // 取消收藏主题
  unCollectHandle(id) {
    if (isLoginFunc()) {
      this.collectData(this.props.userInfoData?.token, id)
    }
    
  }

  // 收藏主题接口
  // token, topicId 主题id
  async collectData(token, topicId) {
    const res = await postTopicCollect(token, topicId)
    console.log(res)
  }
  // 取消收藏主题接口
  async unCollectData(token, topicId) {
    const res = await postTopicUnCollect(token, topicId) 
    console.log(res)
  }
}

// state转为属性
const mapStateToProps = (state) => {
  return {
    topcsContent: state.topcsContent,
    userInfoData: state.userInfoData
  }
}

// dispatch 转为属性
const mapDispatchToProps = (dispatch) => {
  return {
    getData(id) {
      const action = getTopicInfoData(id)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListInfo);