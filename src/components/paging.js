/*
 * @Author: your name
 * @Date: 2021-06-25 16:59:01
 * @LastEditTime: 2021-06-28 15:28:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\paging.js
 */
// 分页
import React, { Component } from 'react'
import store from '../store'

import {
  // 获取首页列表各项数据
  getHomeData,
  // 修改页码
  changePageIndexAction
} from '../store/actionCreates'

class Paging extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // 组件发生更新
    this.storeChange = this.storeChange.bind(this)
  }
  render() {
    return (
      <div className='paging'>
        <div className='con'>
          <span className='prevItem'>
            <i className='iconfont icon-shangyiye'></i>
          </span>
          <ul>
            {
              [...Array(5)].map((item, index) => {
                return <li className={this.state.pageIndex === index ? 'cur' : ''}  onClick={() => {
                  this.changePage(index + 1)
                }} key={index + 1000}>{index + 1}</li>
              })
            }
          </ul>
          <span className='nextItem'>
            <i className='iconfont icon-xiayiye1'></i>
          </span>
        </div>
      </div>
    )
  }
  
  storeChange() {
    this.setState(store.getState())
  }

  // 修改页码
  changePage(index) {
    console.log(index)
    const action = changePageIndexAction(index)
    store.dispatch(action)
    this.getData({
      page: index,
      tab: this.state.pageTab,
      limit: 20,
      mark: true
    })
  }

  // 从actionCreate页面拿到获取数据的getHomeData中间件函数
  getData(props) {
    const action = getHomeData(props)
    store.dispatch(action)
  }
}


export default Paging