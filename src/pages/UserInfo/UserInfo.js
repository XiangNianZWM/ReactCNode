/*
 * @Author: your name
 * @Date: 2021-07-01 16:12:28
 * @LastEditTime: 2021-07-09 16:34:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\pages\UserInfo\UserInfo.js
 */
import React, { Component } from 'react';

// 关于作者
import AboutAuthor from '../../components/AboutAuthor';
// 列表
import MyList from '../../components/MyList'
// 客户端
import DownClient from '../../components/DownClient'
import {
  // 获取用户信息
  getUserInfo,
  // 获取用户收藏话题
  getUserCollect
} from '../../server/api'
// Loading
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 用户信息 
      userInfo: {},
      // 用户收藏话题
      userCollect: []
    }
  }
  render() { 
    return ( 
      <div className = 'userInfo'>
        <div className='fl'>
          <div className='box'>
            <div className='title'>
              <i className='iconfont icon-yonghu'></i>
              收藏话题
            </div>
              <MyList
                dataJson={this.state.userCollect}
              />
          </div>
          <div className = 'box'>
            <div className='title'>
              <i className='iconfont icon-yonghu hot'></i>
              最近参与的话题
            </div>
            <MyList 
              dataJson={this.state.userInfo && this.state.userInfo.recent_replies}
            />
          </div>
          <div className='box'>
            <div className='title'>
              <i className='iconfont icon-yonghu cold'></i>
              最近创建话题
            </div>
            <MyList 
              dataJson={this.state.userInfo && this.state.userInfo.recent_topics}
            />
          </div>
        </div>
        <div className = 'fr'>
          <div className = 'box'>
            <div className='title'>
              <i className='iconfont icon-yonghu'></i>
              关于作者
            </div>
            <AboutAuthor
              dataJson={{
                loginname: this.state.userInfo.loginname,
                avatar_url: this.state.userInfo.avatar_url
              }}
              point={this.state.userInfo.score}
            />
          </div>
          {/* 客户端下载 */}
          <DownClient />
        </div>
      </div>
     );
  }
  componentDidMount() {
    this.getUserInfoData(this.props.match.params.id)
    this.getUserCollectData(this.props.match.params.id)
  }

  // 获取用户详情接口
  // id 为用户名
  async getUserInfoData(id) {
    const res = await getUserInfo(id)
    if (res && res.success) {
      this.setState({
        userInfo: res.data
      })
    }
  }
  // 用户收藏话题
  async getUserCollectData(id) {
    const res = await getUserCollect(id)
    if (res && res.success) {
      this.setState({
        userCollect: res.data
      })
    }
  }
}
 
export default UserInfo;