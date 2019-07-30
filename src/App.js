// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import User from './User/User.js'
import Time from './time/time.js'

class App extends Component {
  word1 = "Hello";
  word2 = "world!";
  word3 = "Goodbye!"
  render() {
    return (
      <div>
        <center>
          <Time />
          <User
            sendword1={this.word1}
            sendword2={this.word2}
            sendword3={this.word3}
          ></User>
        </center>
      </div>

    );
  }
}

export default App;
