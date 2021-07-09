/*
 * @Author: your name
 * @Date: 2021-06-21 14:20:48
 * @LastEditTime: 2021-07-09 16:33:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\Header.js
 */
import React, { Component } from 'react'

// 引入react-router
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {isLoginFunc} from '../utils/utils'
class Header extends Component {
  render() { 
    return ( 
      <div className='header'>
        <div className='w1440 ct'>
          <div className='fl ct'>
            <span className='logo'>
              <i className='iconfont icon-logo'></i>
            </span>
          </div>
          <div className='fr ml ct'>
            <div className='searchTop'>
              <input type='text' placeholder='请输入搜索项...' className={this.props.topSearchStatus ? 'w100' : ''} />
              <i onClick={this.props.setTopSearch} className='iconfont icon-search'></i>
            </div>
            <ul>
              <li>
                <Link to='/'>首页</Link>
              </li>
              {/* <li>
                <Link to='/getstart'>新手入门</Link>
              </li> */}
              {/* <li>
              <Link to='/apipage'>API</Link>
            </li> */}
              <li>
                <Link to='/about'>关于</Link>
              </li>
              {/* <li>
                <a href='https://github.com/signup?source=login'>注册</a>
              </li> */}
              {
                this.props.userInfoData?.id ? 
                (
                  <li className='logincz'>
                    <span className='img'>
                        <img src={this.props.userInfoData?.author?.avatar_url} alt = '' />
                    </span>
                  </li>
                )
                :
                (
                    <li onClick={() => isLoginFunc()}>
                      <font>登录</font>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
     );
  }
}

// state 转为属性
const mapStateToProps = (state) => {
  return {
    userInfoData: state.userInfoData
  }
}
// dispatch 转为属性
const mapDispatchToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
