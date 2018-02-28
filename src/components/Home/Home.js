import React, {Component} from 'react';
import IndexHeader from './IndexHeader';
import Swiper from './Swiper';
import Few from './Few';
import Showlist from './Showlist';

export default class Home extends Component {
  render() {
    return(
      <div>
        <IndexHeader></IndexHeader>
        <div className="index-nav">
          <img className="index-img" src="https://fuss10.elemecdn.com/d/aa/ebe05497ef475686970bd31467d8apng.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/" alt=""/>
        </div>
        <Swiper></Swiper>
        <div className="newuser">
          <img className="newuser-img" src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt=""/>
        </div>
        <Few></Few>
        <div className="showlist-title borders">
          推荐商家
        </div>
        <Showlist></Showlist>
      </div>
    )
  }
}
