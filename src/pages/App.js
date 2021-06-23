// 主框架页面
import React, { Component } from 'react';

// 引入路由
import { BrowserRouter as Router,  Route } from 'react-router-dom' 

// 公用组件
// 顶部
import Header from '../components/Header'
// Loading
// import Loading from '../components/Loading'
// 文字列表
import TextList from '../components/TextList'

// 引入页面组件
import Index from './Index'
// 新手入门
import GetStart from './GetStart'
// Api
import ApiPage from './ApiPage'
// 关于
import About from './About'
// 登录
import Login from './Login'

// 引入redux, store
import store from '../store'
import {
  searchStatusAction
} from '../store/actionCreates'

// 引入api
import {
  // 首页列表请求
  getTopics
} from '../server/api'

class App extends Component {
  constructor(props) {
    super(props)
    // 绑定this
    this.setTopSearch = this.setTopSearch.bind(this)
    // 拿到store里的数据
    this.state = store.getState()
    // 让组件发生更新
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
    this.state = {
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
          tab: ''
        }
      ]
    }
  }
  render() {
    return ( 
      <div className='main'>
        <Router>
          <Header
            topSearchStatus={this.state.searchStatus}
            setTopSearch={this.setTopSearch}
          />
          <div className='content'>
            <div className= 'w1440 flex'>
              <div className = 'fl'>
                <div className='box topTab'>
                  <ul>
                    {
                      this.state.tabList.map((item, index) => {
                        return (
                          <li key = { index }>
                            {item.title}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div className = 'box'>
                  <Route path='/' exact component={Index} />
                  <Route path='/getstart' component={GetStart} />
                  <Route path='/apipage' component={ApiPage} />
                  <Route path='/about' component={About} />
                  <Route path='/login' component={Login} />
                </div>
              </div>
              <div className = 'fr'>
                <div className = 'box activeUser'>
                  <div className = 'title'>
                    <i className='iconfont icon-yonghu'></i>
                    活跃用户
                  </div>
                  <div className = 'con'>
                    <ul>
                      <li>
                        <span>
                          <img src= 'https://avatars.githubusercontent.com/u/2842176?v=4&s=120' />
                        </span>
                        <p>
                          我是测试每次
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src='https://avatars.githubusercontent.com/u/2842176?v=4&s=120' />
                        </span>
                        <p>
                          我是测试每次
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src='https://avatars.githubusercontent.com/u/2842176?v=4&s=120' />
                        </span>
                        <p>
                          我是测试每次
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src='https://avatars.githubusercontent.com/u/2842176?v=4&s=120' />
                        </span>
                        <p>
                          我是测试每次
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src='https://avatars.githubusercontent.com/u/2842176?v=4&s=120' />
                        </span>
                        <p>
                          我是测试每次
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src='https://avatars.githubusercontent.com/u/2842176?v=4&s=120' />
                        </span>
                        <p>
                          我是测试每次
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className = 'box hotTopic'>
                  <div className = 'title'>
                    <i className='iconfont icon-huati hot'></i> 热门话题
                  </div>
                  <div className = 'con'>
                    <TextList />
                  </div>
                </div>
                <div className='box zeroTopic'>
                  <div className='title'>
                    <i className='iconfont icon-huati cold'></i> 无人回复话题
                  </div>
                  <div className='con'>
                    <TextList />
                  </div>
                </div>
                <div className = 'box clineQr'>
                  <div className = 'title'>
                    <i className='iconfont icon-tubiaolunkuo- cold'></i>
                    客户端下载
                  </div>
                  <div className = 'con'>
                    <img alt='' src= 'https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU' />
                    <p>扫描二维码下载</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
     );
  }

  // 组件挂载之前
  componentDidMount () {
    this.getTopicsData(
      1,
      'all',
      20,
      true
    )
  }

  // 组件发生更新
  storeChange() {
    this.setState(store.getState())
  }
  // 修改顶部搜索框
  setTopSearch() {
    const action = searchStatusAction(!this.state.searchStatus)
    store.dispatch(action)
  }
  // 获取数据
  async getTopicsData (
    page,
    tab,
    limit,
    mdrender
  ) {
    const res = await getTopics(
      page,
      tab,
      limit,
      mdrender
    )
    console.log(res)
  }
}
 
export default App;