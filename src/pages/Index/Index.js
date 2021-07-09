/*
 * @Author: your name
 * @Date: 2021-06-21 14:14:01
 * @LastEditTime: 2021-07-09 16:11:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\pages\Index\Index.js
 */
import React, { Component, Fragment } from 'react'
// 引入react-router
import { Link } from 'react-router-dom'

// 图文列表
import ImgTextList from '../../components/ImgTextList'
import store from '../../store'

// Loading
import Loading from '../../components/Loading'
// 文字列表
import TextList from '../../components/TextList'
// 活跃用户组件
import UserList from '../../components/UserList'
// 客户端下载
import DownClient from '../../components/DownClient'
// react-redux
import { connect } from 'react-redux'

import {
  // 获取首页列表各项数据
  getHomeData,
  // 修改页码
  changePageIndexAction,
  // 保存频道
  changeTabDataAction,
  // 保存频道index
  changeTabIndexAction
} from '../../store/actionCreates'


class Index extends Component {
  constructor(props) {
    super(props)
    // 拿到store数据
    this.state = store.getState()
  }
  
  // 组件挂载之前
  componentDidMount() {
    // 优先获取首页数据
    this.props.getData({
      page: 1,
      tab: 'all',
      limit: 20,
      mark: true
    })
  }
  render() {
    return (
      <Fragment>
        <div className = 'fl'>
          <div className='box topTab'>
            <ul>
              {
                this.props.tabList.map((item, index) => {
                  return (
                    <li className={this.props.tabIndex === index ? 'cur' : ''} key = { index } onClick = {() => {
                      this.changeTabIndex(index, item)
                    }}>
                      {item.title}
                    </li>
                  )
                })
              }
            </ul>
            {
              this.props.userInfoData?.id?
              (
                <span className='issueTopic'>
                  <Link to='/newtopic'>
                    发布新话题
                  </Link>
                </span>
              )
              :
              null
            }
            
          </div>
          <div className = 'box'>
            {
              this.props.loadingStatus ? (
                <Loading />
              ) : (
                <div>
                  <ImgTextList
                      dataJson={this.props.allIndexData}
                  />
                </div>
              )
            }
          </div>
        </div>
        <div className = 'fr'>
          <div className = 'box activeUser'>
            <div className = 'title'>
              <i className='iconfont icon-yonghu'></i>
              活跃用户
            </div>
            <div className = 'con'>
              <UserList 
                dataJSon={this.props.userIndexData}
              />
            </div>
          </div>
          <div className = 'box hotTopic'>
            <div className = 'title'>
              <i className='iconfont icon-huati hot'></i> 热门话题
            </div>
            <div className = 'con'>
              <TextList
                dataJSon={this.props.hotIndexData}
                />
            </div>
          </div>
          <div className='box zeroTopic'>
            <div className='title'>
              <i className='iconfont icon-huati cold'></i> 无人回复话题
            </div>
            <div className='con'>
              <TextList 
                dataJSon={this.props.coldIndexData}
              />
            </div>
          </div>
          <DownClient />
        </div>
      </Fragment>
    )
  }

  // 重新获取tab数据
  changeTabIndex(index, item) {
    this.props.changeTabIndexData(index)
    setTimeout(() => {
      // 修改页码
      this.props.changePageIndexData(1)
      // 保存当前tab
      this.props.changePageTabData(item.tab)
      this.props.getData({
        page: this.state.pageIndex + 1,
        tab: item.tab,
        limit: 20,
        mark: true
      })
    }, 0);
  }
}



// 映射属性
const mapStateToProps = (state) => {
  return {
    // loading
    loadingStatus: state.loadingStatus,
    // 频道页index
    tabIndex: state.tabIndex,
    // 所有数据
    allIndexData: state.allIndexData,
    // 用户数据
    userIndexData: state.userIndexData,
    // 热门帖子
    hotIndexData: state.hotIndexData,
    // 冷门帖子
    coldIndexData: state.coldIndexData,
    // 搜索栏是否展开
    searchStatus: state.searchStatus,
    // 用户信息
    userInfoData: state.userInfoData,
    tabList: [
      {
        title: '全部',
        tab: 'all'
      },
      {
        title: '精华',
        tab: 'good'
      },
      {
        title: '分享',
        tab: 'share'
      },
      {
        title: '问答',
        tab: 'ask'
      },
      {
        title: '招聘',
        tab: 'job'
      },
      {
        title: '客户端测试',
        tab: 'dev'
      }
    ]
  }
}

// 映射方法为props属性
const mapDispatchToProps = (dispatch) => {
  return {
    // 修改页码
    changePageIndexData(index) {
      const action = changePageIndexAction(index)
      dispatch(action)
    },
    // 保存频道index
    changeTabIndexData(index) {
      const action = changeTabIndexAction(index)
      store.dispatch(action)
    },
    // 保存频道
    changePageTabData(value) {
      const action = changeTabDataAction(value)
      dispatch(action)
    },

    // 获取数据
    // 从actionCreate页面拿到获取数据的getHomeData中间件函数
    getData(props) {
      const action = getHomeData(props)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)