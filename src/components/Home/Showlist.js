import React, {Component} from 'react';
import '../../style/css/index.css';
import axios from 'axios';

class Showlist extends Component {
  constructor() {
    super();
    this.state = {
      img:[],
      desc: []
    }
  }
  componentDidMount() {
    axios.get('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&offset=16&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=1da932d804ee4c6cb1698d0ff39cd03a&terminal=h5')
      .then((res) => {
        console.log(res)
      })
  }
  render() {
    return(
      <section className="showlist">
        <section className="showlist-container">
          <div className="showlist-con">
            <section className="showlist-top-left">
              <img className="top-left-img" src="" alt=""/>
            </section>
            <section className="showlist-top-right"></section>
          </div>
          <section className="showlist-bottom"></section>
        </section>
      </section>
    )
  }
}

export default Showlist;