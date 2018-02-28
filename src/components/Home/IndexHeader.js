import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../../style/css/index.css';

export default class IndexHeader extends Component {
  render() {
    return(
      <div className="home">
        <NavLink to="/search">
          <div className="search">
            <p className="search-con">
              <i className="iconfont">&#xe600;</i>
              <span>搜素商家、商品名称</span>
            </p>
          </div>
        </NavLink>
      </div>
    )
  }
}