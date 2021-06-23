import React, { Component } from 'react'

// 引入react-router
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
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
              <li>
                <Link to='/getstart'>新手入门</Link>
              </li>
              {/* <li>
              <Link to='/apipage'>API</Link>
            </li> */}
              <li>
                <Link to='/about'>关于</Link>
              </li>
              <li>
                <a href='https://github.com/signup?source=login'>注册</a>
              </li>
              <li>
                <Link to='/login'>登录</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Header;
