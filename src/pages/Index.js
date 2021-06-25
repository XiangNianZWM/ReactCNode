import React, { Component } from 'react'
// 图文列表
import ImgTextList from '../components/ImgTextList'
import store from '../store'

// Loading
import Loading from '../components/Loading'

class Index extends Component {
  constructor(props) {
    super(props)
    // 拿到store数据
    this.state = store.getState()
    // 组件更新
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      this.state.loadingStatus ? (
        <Loading />
      ) : (
        <div>
          <ImgTextList
            dataJson={this.state.allIndexData}
          />
        </div>
      )
    )
  }

  storeChange() {
    this.setState(store.getState())
  }
}

export default Index