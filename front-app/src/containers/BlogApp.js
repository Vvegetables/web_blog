import React, { Component } from 'react';
import '../static/css/style.css';
import BodyContainer from './BodyContainer';

class BlogApp extends Component {

  fetchUsers(){
    return fetch('api/users',{accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      <div className="App">
          <BodyContainer />
      </div>
    );
  }
}

export default BlogApp;
