/*
 * @Author: your name
 * @Date: 2021-06-21 15:54:24
 * @LastEditTime: 2021-07-09 16:17:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\pages\About\About.js
 */
// 关于
import React, { Component } from 'react';
class About extends Component {
  render() {
    return (
      <div className = 'aboutus'>
        <div className = 'box '>
          <h3>
            关于本项目
          </h3>
          <p>
            该项目为仿CNode社区开发的React版，旨在学习React所用。
          </p>
          <p>
            项目所用技术: React、React-Rouer、Redux、React-Redux、Axios、Redus-thunk、wangeditor
          </p>
          <p>
            感谢CNode提供接口
          </p>
        </div>
        <div className = 'box'>
          <h3>
            关于CNode
          </h3>
          <p>
            CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
          </p>
          <p>
            CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。
          </p>
          <p>
            CNode 的 SLA 保证是，一个9，即 90.000000%。
          </p>
          <p>
            社区目前由 @alsotang 在维护，有问题请联系：https://github.com/alsotang
          </p>
          <p>
            请关注我们的官方微博：http://weibo.com/cnodejs
          </p>
        </div>
      </div>
    );
  }
}

export default About;