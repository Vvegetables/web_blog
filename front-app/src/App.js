import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderComponent from'./components/header'
// import WordPreview from './components/word_preview';

class App extends Component {
  constructor(){
    super()
    this.state = {users : []}
  }
  fetchUsers(){
    return fetch('api/users',{accpet: "application/json"}).then(res => {return res.json().then(json => {this.setState({users: json})})})
  }
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>

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
