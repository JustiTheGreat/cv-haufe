import React, {Component} from 'react';
import SkillsCSS from './Block.module.css';
import {BGStyle, skills} from './Constants.js';

class Skills extends Component {
    render() {
        return(
            <div className={SkillsCSS.Block} style={BGStyle}>
                <div className={SkillsCSS.Title}>PROFESSIONAL SKILLS</div>
                <div className={SkillsCSS.Skills}>
                    {skills.map(skill=>
                        <div className={SkillsCSS.Skill} key={skill}>
                            {skill}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Skills;