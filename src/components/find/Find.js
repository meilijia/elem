import React, {Component} from 'react';
import Header from './Header'
import Recommend from './Recommend'

export default class Find extends Component {
  render() {
    return(
      <div>
        <Header></Header>
        <div className="nav">
          <img src="https://fuss10.elemecdn.com/5/2f/94338b99657d5c2a3de1ba17cb660jpeg.jpeg" alt="nav" className="nav-img"/>
        </div>
        <Recommend></Recommend>
      </div>
    )
  }
}
