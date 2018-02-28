import React, {Component} from 'react';
import '../../style/css/index.css';

export default class Few extends Component {
  render() {
    return(
      <div className="few">
        <div className="few-left">
          <h3 className="few-title few-title-one">限量抢购</h3>
          <p className="few-two">超值美味 9.9元起</p>
          <p className="few-three">
            <span className="people">1418人</span>
            <span className="show">正在抢></span>
          </p>
          <p className="few-img-con">
            <img className="few-img" src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""/>
          </p>
        </div>
        <div className="few-right">
          <h3 className="few-title few-title-two">品质套餐</h3>
          <p className="few-two">搭配齐全吃的好</p>
          <p className="few-three few-three-p">立即抢购></p>
          <p className="few-img-con">
            <img className="few-img" src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""/> 
          </p>
        </div>
      </div>
    )
  }
}