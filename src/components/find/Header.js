import React, {Component} from 'react';
import '../../style/css/find.css';

export default class Header extends Component {
  render() {
    return(
      <div className="top">
        <i className="iconfont zuo">&#xe61c;</i>
        <span className="find">发现</span>
      </div>
    ) 
  }
}