import React, {Component} from 'react';
import AppCSS from './App.module.css';
import Profile from './Profile.js';
import AboutMe from './AboutMe.js';
import Skills from './Skills.js';

class App extends Component {
  render() {
    return (
      <div className={AppCSS.Container}>
        <div className={AppCSS.Col1}>
          <Profile/>
        </div>
        <div className={AppCSS.Col2}>
          <AboutMe/>
          <Skills/>
          <div className="Block"><p>Education</p></div>  
          <div className="Block"><p>Skills</p></div>
        </div>
      </div>
    );
  }
}

export default App;
