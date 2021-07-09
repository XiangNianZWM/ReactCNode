/*
 * @Author: your name
 * @Date: 2021-07-06 17:17:32
 * @LastEditTime: 2021-07-09 10:52:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\Comment.js
 */
import React, { Component, Fragment } from 'react';
import {
  saveLoginDialogAction,
} from '../store/actionCreates'

import {
  postNewReplies
} from '../server/api'

// react-redux
import { connect } from 'react-redux'

import {
  isLoginFunc
} from '../utils/utils'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueText: ''
    }
  }
  render() { 
    return ( 
      <div className = 'commentSubmit'>
        <Fragment>
          {
            this.props.userInfoData?.id ? (
              <Fragment>
                <div className = 'hImg'>
                  <span className = 'timg'>
                    <img src={this.props.userInfoData?.avatar_url} alt = '' />
                  </span>
                  <p>
                    {this.props.userInfoData?.loginname}
                  </p>
                </div>
              </Fragment>
            ): (
              <span className='img'>
                <i className='iconfont icon-yonghu1'>
                </i>
              </span>
            )
          }
          
        </Fragment>
        <div className = 'txt'>
          <textarea 
            value={this.state.valueText}
            onChange = {this.changeValue.bind(this)}
          placeholder = '请输入评论...' onFocus = {this.isLogin.bind(this)} />
          <p>
            <button onClick={this.submitText.bind(this)}>提交</button>
          </p>
        </div>
      </div>
     );
  }
  // 是否登录
  isLogin() {
    // console.log('12')
    // this.props.changeLoginDialogStatus(true)
    if (!this.props.userInfoData?.id) {
      this.props.changeLoginDialogStatus(true)
    }
  }
  // 双向绑定
  changeValue(e) {
    this.setState({
      valueText: e.target.value
    })
  }
  // 提交评论
  submitText() {
    if (isLoginFunc()) {
      this.newRepliesFunc(
        // 用户token
        this.props.userInfoData?.token,
        this.state.valueText,
        this.props?.id
      )
    }
  }
  // 评论接口
  async newRepliesFunc (token, content, topic_id) {
    const res = await postNewReplies(token, content, topic_id)
    if (res?.success) {
      this.props.getData(topic_id)
      this.setState({
        valueText: ''
      })
    }
  }
}

// state 转为属性
const mapStateToProps = (state) => {
  return {
    userInfoData: state.userInfoData
  }
}
// dispatch 转为属性
const mapDispatchToProps = (dispatch) => {
  return {
    // 改变登录弹窗的状态
    changeLoginDialogStatus(status) {
      const action = saveLoginDialogAction(status)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment);