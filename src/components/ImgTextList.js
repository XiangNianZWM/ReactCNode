/*
 * @Author: your name
 * @Date: 2021-06-22 18:58:45
 * @LastEditTime: 2021-06-23 17:36:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\ImgTextList.js
 */
import React, { Fragment } from 'react'

// 引入工具函数
import { transTypes } from '../utils/utils'
// 分页
import Paging from '../components/paging'

const ImgTextList = (props) => {
  return (
    <Fragment>
      <div className='indexImgList'>
        <ul>
          {
            props.dataJson?.map((item, index) => {
              return (
                <li className={item.top ? 'tops' : ''} key={item.id + index}>
                  <div className='txtDiv'>
                    <h4 className={item.good ? 'goods' : ''}>
                      <span className='tag'>
                        {
                          transTypes(item.top, item.good, item.tab)
                        }
                      </span>
                      |
                      <span className='authorInfo'>
                        <img src={item.author?.avatar_url} alt='' />
                        <font className='name'>
                          {item.author?.loginname}
                        </font>
                      </span>
                      |
                      <span className='time'>
                        {item.create_at}
                      </span>
                    </h4>
                    <div className='title'>
                      <a>{item.title}</a>
                    </div>
                    <h6>
                      <span className='icon'>
                        <i className='iconfont icon-chakan'>
                        </i>
                        {item.visit_count}
                      </span>
                      <span className='icon'>
                        <i className='iconfont icon-006pinglunhuifu'>
                        </i>
                        {item.reply_count}
                      </span>
                    </h6>
                  </div>
                  <div className='imgDiv'>
                    <img src={item.author?.avatar_url} alt='' />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <Paging />
    </Fragment>
  )
}

export default ImgTextList