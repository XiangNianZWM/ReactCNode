/*
 * @Author: your name
 * @Date: 2021-07-02 15:10:08
 * @LastEditTime: 2021-07-08 17:45:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\ReplyCon.js
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import Comment from './Comment'
import { transTime, isLoginFunc } from '../utils/utils'

// api
import {
  postReplyUps
} from '../server/api'

class ReplyCon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 区分多个点赞变量
      zanSatus: true
    }
  }
  render() {
    let {id, getData, dataJson} = this.props
    return ( 
      <div className='replyCon '>
        <div className='box'>
          <Comment id={id} getData={getData} />
        </div>
        <div className='box'>
          <div className='title'>
            <i className='iconfont icon-huifu' ></i>
            {dataJson?.length} 条回复
          </div>
          <div className='con'>
            <ul>
              {
                dataJson?.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <span className='img'>
                        <img src={item.author?.avatar_url} alt='' />
                      </span>
                      <div className='txt'>
                        <h5>
                          <span className='louc'>
                            #{index + 1}楼
                          </span>
                          <span className='name'>
                            {item.author?.loginname}
                          </span>
                          <span className='time'>
                            {transTime(item.create_at)}
                          </span>
                          <span className='dianz'>
                            {
                              item.ups.length ?
                               (
                                 item.ups.map(i => {
                                   if (i === this.props.userInfoData.id) {
                                     return (
                                       <i className='iconfont icon-dianzan1 aaaa'
                                       key = {i + 100}
                                       onClick={() => { this.upsdian(item) }}></i>
                                     )
                                   } else {
                                     return (
                                       <i 
                                       key = {i + 100}className='iconfont icon-dianzan bbbb' onClick={() => { this.upsdian(item) }}></i>
                                     )
                                   }
                                   
                                 })
                               )
                               :
                               (
                                  <i style={{ top: '-12px'}} className='iconfont
                                  icon-dianzan zzzz' onClick={() => { this.upsdian(item) }}></i>
                               )
                            }
                            {item.ups.length > 0 ? item.ups.length : ''}
                          </span>
                        </h5>
                        <div className='rc'>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.content
                            }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
     )
  }
  upsdian(item) {
    // 判断是否登录
    if (isLoginFunc()) {
      this.replyUpsFunc(
        this.props.userInfoData?.token,
        item?.id
      )
    }
  }
  // 点赞api
  async replyUpsFunc(accessToken, reply_id) {
    const res = await postReplyUps(accessToken, reply_id)
    console.log(res)
    if (res?.success) {
      this.props.getData(this.props.id)
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

export default connect(mapStateToProps, mapDispatchToProps)(ReplyCon);