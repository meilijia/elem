import React, {Component} from 'react';
import axios from 'axios';

class Swiper extends Component {
  constructor() {
    super();
    this.state = {
      list: [1,2,3,4,5,6]
    }
  }
  componentDidMount() {
    axios.get('/restapi/shopping/openapi/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
      .then((res) => {
        console.log(res)
        this.state.list.push(res.data[0].entries)
        this.setState({
          list: res.data[0].entries
        })
      })
  }
  render() {
    return(
      <div>
        {
          this.state.list.map((item, index) => {
            return(
              <div key={item.id}>{item.name}</div>
            )
          })
        }
      </div>
    )
  }
}

export default Swiper;