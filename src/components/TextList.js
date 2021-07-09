/*
 * @Author: your name
 * @Date: 2021-06-22 17:40:33
 * @LastEditTime: 2021-07-02 14:40:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */

// 文字列表组件

import React from 'react'
import { Link } from 'react-router-dom'

const TextList = (props) => {
  return (
    <ul className = 'textList'>
      {
        props.dataJSon && props.dataJSon.slice(0, 5).map(item => {
          return (
            <li key = {item.id}>
              <Link to={'/listinfo/' + item.id}>
                {item.title}
              </Link>
            </li>
          )
        })
      }
      
      
    </ul>
  )
}

export default TextList