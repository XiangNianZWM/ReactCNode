/*
 * @Author: your name
 * @Date: 2021-07-02 14:48:54
 * @LastEditTime: 2021-07-02 14:50:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\DownClient.js
 */
import React from 'react';

const DownClient = () => {
  return (
    <div className='box clineQr'>
      <div className='title'>
        <i className='iconfont icon-tubiaolunkuo- cold'></i>
        客户端下载
      </div>
      <div className='con'>
        <img alt='' src='https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU' />
        <p>扫描二维码下载</p>
      </div>
    </div>
  )
}
 
export default DownClient;