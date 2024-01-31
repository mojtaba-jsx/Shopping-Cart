import React, { Component } from 'react'
import './Shop.css'
 class Shop extends Component {

  constructor(){
    super()
    this.state ={
      products:[
        {id:1,img:'',price:'',title:'',},
        {id:2,img:'',price:'',title:'',},
        {id:3,img:'',price:'',title:'',},
        {id:4,img:'',price:'',title:'',},
        {id:5,img:'',price:'',title:'',},
      ],
      shoppingCart:[],
      socials:[
        {id:1,href:'http://www.youtube.com',image:'logo.png'},
        {id:2,href:'http://www.youtube.com',image:'logo.png'},
        {id:3,href:'http://www.youtube.com',image:'logo.png'},
      ],
    }
  }
  render() {
    return (
      <div>Shop</div>
    )
  }
}


export default  Shop