/*
 * @Author: your name
 * @Date: 2021-07-02 14:32:18
 * @LastEditTime: 2021-07-09 16:00:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\AboutAuthor.js
 */


// 关于作者组件
import React from 'react';
import {Link} from 'react-router-dom'

const AboutAuthor = (props) => {
  return (
    <div className='aauthorCon'>
      <div className='top'>
        <Link to={'/userinfo/' + props.dataJson?.loginname}>
          <span className='img'>
            <img src={props.dataJson?.avatar_url} alt='' />
          </span>
          <span className='txt'>
            {props.dataJson?.loginname}
          </span>
        </Link>
      </div>
      <p className='jifen'>
        积分: {props.point}
      </p>
      <p className='jianj'>
        “ 这家伙很懒，什么个性签名都没有留下。 ”
      </p>
    </div>
  )
}
export default AboutAuthor;