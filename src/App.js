import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './style/base/reset.css';
import './style/base/border.css';
import './style/base/iconfont/iconfont.css';
import './style/css/common.css';

import Home from  './components/Home/Home';
import Find from  './components/find/Find';
import Order from  './components/Order';
import Mine from  './components/Mine';

import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div  className="footer">
            <NavLink activeClassName="active" className="footer-con" exact to="/">
              <i className="iconfont bottom">&#xe607;</i>
              <span className="desc">主页</span>
            </NavLink>
            <NavLink activeClassName="active" className="footer-con" to="/find">
              <i className="iconfont bottom">&#xe67e;</i>
              <span className="desc">发现</span>
            </NavLink>
            <NavLink activeClassName="active" className="footer-con" to="/order">
              <i className="iconfont bottom">&#xe606;</i>
              <span className="desc">订单</span>
            </NavLink>
            <NavLink activeClassName="active" className="footer-con" to="/mine">
              <i className="iconfont bottom">&#xe629;</i>
              <span className="desc">我的</span>
            </NavLink>
          </div>

          <Route exact path="/" component={Home}></Route>
          <Route path="/find" component={Find}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/mine" component={Mine}></Route>

          <Route path="/search" component={Search}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
