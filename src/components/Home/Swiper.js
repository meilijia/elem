import React, {Component} from 'react';
// import axios from 'axios';

class Swiper extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {id: 20004689, image_hash: "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"美食"},
        {id: 20008089, image_hash: "https://fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"午餐"},
        {id: 20008841, image_hash: "https://fuss10.elemecdn.com/8/04/ef32751cb3b72d783f764f0f2c722jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"商超便利"},
        {id: 20006761, image_hash: "https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"果蔬生鲜"},
        {id: 20008849, image_hash: "https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"大牌5折"},
        {id: 20008857, image_hash: "https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"医药健康"},
        {id: 20008537, image_hash: "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"浪漫鲜花"},
        {id: 20008521, image_hash: "https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"麻辣烫"},
        {id: 20008529, image_hash: "https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"地方菜系"},
        {id: 20008569, image_hash: "https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/", name:"披萨意面"}

      ]
    }
  }
  // componentDidMount() {
  //   axios.get('/restapi/shopping/openapi/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
  //     .then((res) => {
  //       // this.state.list=res.data[0].entries
  //       // console.log(this.state.list)
  //       this.setState({
  //         // list: res.data[0].entries
  //         list: this.state.list
  //       })
  //     })
  // }
  render() {
    return(
      <div className="icons">
        {
          this.state.list.map((item, index) => {
            return(
              <div key={item.id} className="icons-con">
              <img src={item.image_hash} alt="" className="icons-img"/>
                <p>{item.name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Swiper;