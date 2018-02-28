import React, {Component} from 'react';
import IndexHeader from './IndexHeader';
import Swiper from './Swiper';

export default class Home extends Component {
  render() {
    return(
      <div>
        <IndexHeader></IndexHeader>
        <div className="index-nav">
          <img className="index-img" src="https://fuss10.elemecdn.com/d/aa/ebe05497ef475686970bd31467d8apng.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/" alt=""/>
        </div>
        <Swiper></Swiper>
      </div>
    )
  }
}
