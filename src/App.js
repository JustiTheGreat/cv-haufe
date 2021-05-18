import React, {Component} from 'react';
import './App.css';
import Profile from './Profile.js';
import AboutMe from './AboutMe.js';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Col1">
          <Profile />
        </div>
        <div className="Col2">
          <AboutMe />
          <div className="Block"><p>Education</p></div>  
          <div className="Block"><p>Skills</p></div>
        </div>
      </div>
    );
  }
}

export default App;
