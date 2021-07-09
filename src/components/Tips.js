/*
 * @Author: your name
 * @Date: 2021-07-07 15:47:22
 * @LastEditTime: 2021-07-08 16:40:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mapcoded:\study\React项目\react_cnode\src\components\Tips.js
 */
import React, {Component} from 'react';
import { connect } from 'react-redux'
import {
  changeTipStatusAction
} from '../store/actionCreates'
class Tips extends Component {
  render() { 
    let { tipsText } = this.props
    return ( 
      <div className='tips'>
        {tipsText}
      </div>
     );
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.changeStatus(false)
    }, 5000);
  }
}

// 属性转trops
const mapStateToProps = (state) => {
  return {
    tipsText: state.tipsText
  }
}

// 属性转props
const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus(status) {
      const action = changeTipStatusAction(status)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tips)