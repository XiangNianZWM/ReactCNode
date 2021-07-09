/*
 * @Author: your name
 * @Date: 2021-07-09 15:28:13
 * @LastEditTime: 2021-07-09 16:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\myList.js
 */
import React, { Component } from 'react';
// 引入工具函数
import { transTime } from '../utils/utils'
import {Link} from 'react-router-dom'
class MyList extends Component {
  render() { 
    return ( 
      <div className = 'myList'>
        <ul>
          {
            this.props.dataJson?.map(item => {
              return (
                <li key = {item.id}>
                  <span className='img'>
                    <img src={item.author?.avatar_url} alt = '' />
                  </span>
                  <Link to={'/listinfo/' + item.id}>
                    {item.title}
                  </Link>
                  <span className='time'>
                    {transTime(item.last_reply_at)}
                  </span>
                </li>
              )
            })
          }
          
        </ul>
      </div>
     );
  }
}
 
export default MyList;