/*
 * @Author: your name
 * @Date: 2021-06-24 19:31:21
 * @LastEditTime: 2021-07-09 14:47:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\UserList.js
 */

// 用户列表组件
import React from 'react'
import { Link } from 'react-router-dom'
const UserList = (props) => {
  return (
    <ul>
      {
        props.dataJSon && props.dataJSon.map(item => {
          return (
            <li key={item.id}>
              <Link to={'/userinfo/' + item.author?.loginname}>
                <span>
                  <img src={item.author?.avatar_url} alt ='' />
                </span>
                <p>
                  {item.author?.loginname}
                </p>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default UserList