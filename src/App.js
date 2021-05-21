import React, {Component} from 'react';
import AppCSS from './App.module.css';
import Profile from './Profile.js';
import AboutMe from './AboutMe.js';
import Skills from './Skills.js';
import Education from './Education.js';

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
          <Education/>
        </div>
      </div>
    );
  }
}

export default App;
