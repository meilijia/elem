import React, {Component} from 'react';
import '../style/css/order.css';

export default class Header extends Component {
  render() {
    return(
      <div id="order">
        <div className="top">
          <i className="iconfont jiantou">&#xe61c;</i>
          <span className="order">订单</span>
        </div>
        <div className="main">
          <div className="content">
            <div className="content-img">
              <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="" className="img-con"/>
            </div>
            <h2 className="content-title">登陆后查看外卖订单</h2>
            <p className="login">立即登录</p>
          </div>
        </div>
      </div>
      
    ) 
  }
}