/*
 * @Author: your name
 * @Date: 2021-06-22 17:40:33
 * @LastEditTime: 2021-06-22 17:49:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */

import React from 'react'
import { Link } from 'react-router-dom'

const TextList = (props) => {
  return (
    <ul className = 'textList'>
      {
        props.dataJSon && props.dataJSon.map((item, index) => {
          if (index < 5) {
            return (
              <li key = {item.id}>
                <Link to = ''>
                  {item.title}
                </Link>
              </li>
            )
          }
        })
      }
      
      
    </ul>
  )
}

export default TextList