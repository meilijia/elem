import React, {Component} from 'react';
import '../../style/css/find.css';
import axios from 'axios'

class Recommend extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  componentWillMount() {
    axios.get('/restapi/member/v1/discover?platform=1&block_index=0&latitude=39.90469&longitude=116.407173')
      .then((res) => {
        console.log(res.data[1])
        this.setState({
          list: res.data[1]
        })
      })
  }
  render() {
    return(
      <div className="recommend">
        <div className="left">
          <div className="left-one"></div>
          <div className="left-two space"></div>
        </div>
        <div className="right">
          <div className="right-one right-common space"></div>
          <div className="right-two right-common space"></div>
          <div className="right-three space"></div>
        </div>
      </div>
    )
  }
} 

export default Recommend;