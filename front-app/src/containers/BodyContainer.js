import React, { Component } from 'react';
import '../static/css/style.css';
import BlogBodyLeft from './BlogBodyLeft';
import BlogBodyRight from './BlogBodyRight';



class BodyContainer extends Component {
//   constructor(){
//     super()
//     this.state = {
//       users : [],
//       blogs : []
//     }
//   }

//   componentWillMount(){
//     const blogs = [
//       {title:"博客1",desc:"xxxxxxxx1",likeNums:5,commentNums:8,blogId:1},
//       {title:"博客2",desc:"xxxxxxxx2",likeNums:5,commentNums:8,blogId:1},
//       {title:"博客3",desc:"xxxxxxxx3",likeNums:5,commentNums:8,blogId:1},
//       {title:"博客4",desc:"xxxxxxxx4",likeNums:5,commentNums:8,blogId:1}
//     ]
//     this.setState({blogs:blogs})
//   }
  

  fetchUsers(){
    return fetch('api/users',{accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      
          <div className="blog-container">
              <BlogBodyLeft></BlogBodyLeft>
              <BlogBodyRight></BlogBodyRight>
          </div>

    );
  }
}

export default BodyContainer;
