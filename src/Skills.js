import React, {Component} from 'react';
import SkillsCSS from './Block.module.css';
import {BGStyle, skills} from './Constants.js';


class Skills extends Component {
    render() {
        return(
            <div className={SkillsCSS.Block} style={BGStyle} id="skills">
                <div className={SkillsCSS.Title}>PROFESSIONAL SKILLS</div>
                {skills.map(skill=><div className={SkillsCSS.Skill} key={skill}>{skill}</div>)}
            </div>
        );
    }
}

export default Skills;