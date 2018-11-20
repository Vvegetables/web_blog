import React, { Component } from 'react';
import '../static/css/style.css';
import HeaderComponent from './Header'
import BlogBodyLeft from './BlogBodyLeft';
import BlogBodyRight from './BlogBodyRight';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import BodyContainer from './BodyContainer';

const panelReducer = (state,action) => {
  if (!state) return {
    //初始化state
    blogs : [
      {title:"博客1",desc:"xxxxxxxx1",likeNums:5,commentNums:8,blogId:1},
      {title:"博客2",desc:"xxxxxxxx2",likeNums:5,commentNums:8,blogId:1},
      {title:"博客3",desc:"xxxxxxxx3",likeNums:5,commentNums:8,blogId:1},
      {title:"博客4",desc:"xxxxxxxx4",likeNums:5,commentNums:8,blogId:1}
    ]
  }
  switch(action.type) {
    case 'BLOG_LIST':
      console.log(1);
      return {...state,blogs:state.blogs.concat(action.blogs)}
    case 'CATEGORY_LIST':
      console.log(2);
      console.log(state)
      return {...state,blogs:action.blogs}
    default:
      return state
  }
}

const store = createStore(panelReducer)

// import WordPreview from './containers/WordPreview';

class BlogApp extends Component {

  fetchUsers(){
    return fetch('api/users',{accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Provider store={store}>
          <BodyContainer />
        </Provider>

        {/* <button className="App-intro" onClick={this.fetchUsers.bind(this)}>
          click
        </button>
        {
          this.state.users.map(
            (user, index) => {
              return (<h1 key={index}>{user.name}</h1>)
            }
          )
        } */}



      </div>
    );
  }
}

export default BlogApp;
