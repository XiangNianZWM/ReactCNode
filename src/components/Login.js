/*
 * @Author: your name
 * @Date: 2021-07-06 19:18:02
 * @LastEditTime: 2021-07-08 17:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\Login.js
 */
import React, { Component, Fragment } from 'react';

// react-redux
import { connect } from 'react-redux'

import {
  saveLoginDialogAction,
  getLoginUserInfo
} from '../store/actionCreates'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tokenValue: ''
    }
  }
  render() {
    return (
      <Fragment>
        <div className = 'loginDialog' >
          <div className='bg' onClick={this.props.changeIsLoginDialog}></div>
          <div className = 'con'>
            <h2>
              登录
              <i onClick={this.props.changeIsLoginDialog} className= 'iconfont icon-guanbi'></i>
            </h2>
            <h4>
              <input 
                value={this.state.tokenValue}
                onChange = { this.inputChange.bind(this) }
                placeholder= '请输入accesstoken' />
            </h4>
            <h6>
              如何获取 accessToken? 用户登录后，在设置页面可以看到自己的 accessToken
            </h6>
            <p>
              <button onClick = {this.submitLogin.bind(this)}>
                登录
              </button>
            </p>
          </div>
        </div>
      </Fragment >
     );
  }
  // 双向绑定
  inputChange(e) {
    this.setState({
      tokenValue: e.target.value
    })
  }

  submitLogin() {
    if (this.state.tokenValue) {
      this.props.goLogin(this.state.tokenValue)
    }
  }
}

// state 转属性
const mapStateToProps = (state) => {
  return {
    isLoginDialog: state.isLoginDialog
  }
}

// dispatch 转属性
const mapDispatchToProps = (dispatch) => {
  return {
    // 改变弹窗的状态
    changeIsLoginDialog() {
      const action = saveLoginDialogAction(false)
      dispatch(action)
    },
    // 登录
    goLogin(token) {
      const action = getLoginUserInfo(token)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);