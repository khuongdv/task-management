import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";

class App extends Component {
  render() {
    if(!document.cookie['user-login']){
        return(
            <div className="App">
                <h1>You have to log in to the app.</h1>
                <Login/>
            </div>
        );
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
