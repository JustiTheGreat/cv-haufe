import React, {Component} from 'react';
import {BGStyle, skills} from './Constants';
import './Block.css';
class Skills extends Component {
    f (skill) {
        return(
            <div className="Skill">{skill}</div>
        );
    }

    f_add (skills) {
        let list = [];
        for(let i = 0; i < skills.length; i++)
            list.push(this.f(skills[i]));
        return list;
    }
    
    render() {
        return(
            <div className="Block" style={BGStyle} id="skills">
                <div className="Title">PROFESSIONAL SKILLS</div>
                {this.f_add(skills)}
            </div>
        );
    }
}

export default Skills;