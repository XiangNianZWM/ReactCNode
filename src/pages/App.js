/*
 * @Author: your name
 * @Date: 2021-06-21 15:47:46
 * @LastEditTime: 2021-07-09 10:40:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\pages\App.js
 */
// 主框架页面
import React, { Component } from 'react';

// 引入路由
import { BrowserRouter as Router,  Route } from 'react-router-dom' 

// react-redux
import { connect } from 'react-redux'

// 工具
import storage from '../utils/storage'

// 公用组件
// 顶部
import Header from '../components/Header'
// 底部
import Footer from '../components/Footer'
// 登录弹窗
import LoginDialog from '../components/Login'
// 提示框
import Tips from '../components/Tips'
// 引入页面组件
import Index from './Index/Index'
// 新手入门
import GetStart from './GetStart/GetStart'
// Api
import ApiPage from './ApiPage/ApiPage'
// 关于
import About from './About/About'
// 登录
import Login from './Login/Login'
// 文字列表详情
import ListInfo from './ListInfo/ListInfo'
// 用户列表详情
import UserInfo from './UserInfo/UserInfo'
// 发布话题
import NewTopic from './NewTopic/NewTopic'

// 引入redux, store
import store from '../store'
import {
  // 控制搜索栏是否显示
  searchStatusAction,
  // 保存用户信息
  saveLoginUserInfoAction
} from '../store/actionCreates'


class App extends Component {
  constructor(props) {
    super(props)
    // 绑定this
    // this.setTopSearch = this.setTopSearch.bind(this)
    // 拿到store里的数据
    this.state = store.getState()
    // 让组件发生更新
    // this.storeChange = this.storeChange.bind(this)
    // store.subscribe(this.storeChange)
  }
  render() {
    let { isLoginDialog, tipsStatus } = this.props
    return (
      <div className='main'>
        <Router>
          <Header
            topSearchStatus={this.props.searchStatus}
            setTopSearch={this.props.setTopSearch(!this.props.searchStatus)}
          />
          <div className='content'>
            <div className= 'w1440 flex'>
              <Route path='/' exact component={Index} />
              <Route path='/getstart' component={GetStart} />
              <Route path='/apipage' component={ApiPage} />
              <Route path='/about' component={About} />
              <Route path='/login' component={Login} />
              <Route path='/listinfo/:id' component={ListInfo}></Route>
              <Route path='/userinfo/:id' component={UserInfo}></Route>
              <Route path='/newtopic' component={NewTopic} />
            </div>
          </div>
        </Router>
        {/* 底部 */}
        <Footer />
        {/* 登录 */}
        {
          isLoginDialog ? (
            <LoginDialog />
          ) : null
        }
        {/* 提示框 */}
        {
          tipsStatus ? (
            <Tips />
          ): null
        }
      </div>
     );
  }
  componentDidMount() {
    // 保存状态
    if (storage.getSession('userInfo') && storage.getSession('userInfo').id) {
      this.props.changeUserInfo(storage.getSession('userInfo'))
    }
  }
}

// state 转属性
const mapStateToProps = (state) => {
  return {
    isLoginDialog: state.isLoginDialog,
    tipsStatus: state.tipsStatus,
    userInfoData: state.userInfoData
  }
}
// 映射方法为props属性
const mapDispatchToProps = (dispatch) => {
  return {
    // 修改顶部搜索框
    setTopSearch(status) {
      const action = searchStatusAction(status)
      dispatch(action)
    },
    // 保存用户信息
    changeUserInfo(value) {
      const action = saveLoginUserInfoAction(value)
      dispatch(action)
    }
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)