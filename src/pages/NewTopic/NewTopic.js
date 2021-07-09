/*
 * @Author: your name
 * @Date: 2021-07-09 10:36:22
 * @LastEditTime: 2021-07-09 16:33:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\pages\NewTopic\NewTopic.js
 */
import React, { Component } from 'react';

// wangeditor
import ReactWEditor from 'wangeditor-for-react'

// 引入react-redux
import { connect } from 'react-redux'

// api
import {
  postTopics
} from '../../server/api'

// 引入工具函数
import {
  isLoginFunc
} from '../../utils/utils'


class NewTopic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 标题
      titleValue: '',
      // 富文本内容
      editorValue: '',
    }
  }
  render() { 
    return ( 
      <div className = 'newTopic'>
        <div className = 'box title'>
          <div className='fr'>
            <span>
              所属分类:
            </span>
            <select disabled>
              <option>客户端测试</option>
            </select>
          </div>
          <div className = 'fl'>
            <input 
              value={this.state.titleValue}
              onChange = {(e) => this.changeValue(e)}
            placeholder = '请输入标题,10个字以上' />
          </div>
        </div>
        <div className = 'box newTContent'>
          <ReactWEditor
            editorValue={this.state.editorValue}
            placeholder = '请输入话题内容'
            onChange = {(html) => {
              this.setState({
                editorValue: html
              })
            }}
          ></ReactWEditor>
          <p className = 'botBtn'>
            <button className= 'submit' onClick = {this.submitTopic.bind(this)}>
              提交
            </button>
            <button>
              清空
            </button>
          </p>
        </div>
      </div>
     );
  }
  // 提交话题
  submitTopic() {
    // 是否登录
    if (isLoginFunc()) {
      this.issueTopicsFunc(
        // token
        this.props.userInfoData?.token,
        // 标题
        this.state.titleValue,
        // 分类
        'dev',
        // 内容
        this.state.editorValue
      )
    }
    
  }
  
  // input双向绑定
  changeValue(e) {
    this.setState({
      titleValue: e.target.value
    })
  }

  // 组件离开页面时触发
  componentWillUnmount() {
  }

  // 发表新话题接口
  async issueTopicsFunc (
    // token
    token,
    // 标题
    title,
    // 分类，暂时只支持客户端测试发帖。即dev
    tab,
    // 内容
    content
  ) {
    const res = await postTopics(token, title, tab, content)
    if (res?.success) {
      this.setState({
        titleValue: '',
        editorValue: ''
      })
      console.log('跳转')
      this.props.history.push(`/listinfo/${res.topic_id}`)
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
const mapDispatchToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTopic);