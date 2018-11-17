import React, { Component } from 'react';
import '../static/css/App.css';
import HeaderComponent from './Header'
import BlogBodyLeft from './BlogBodyLeft';
import BlogBodyRight from './BlogBodyRight';

// import WordPreview from './containers/WordPreview';

class App extends Component {
  constructor(){
    super()
    this.state = {
      users : [],
      blogs : []
    }
  }

  fetchUsers(){
    return fetch('api/users',{accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <div className="blog-container">
            <BlogBodyLeft></BlogBodyLeft>
            <BlogBodyRight></BlogBodyRight>
        </div>

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

export default App;
