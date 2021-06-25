// 分页
import React, { Component } from 'react'
import store from '../store'

import {
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
    const action = changePageIndexAction(index)
    store.dispatch(action)
  }
}


export default Paging