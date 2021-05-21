import React, {Component} from 'react';
import EducationCSS from './Block.module.css';
import {BGStyle, education} from './Constants.js';

class Education extends Component {
    render() {
        return(
            <div className={EducationCSS.Block} style={BGStyle}>
                <div className={EducationCSS.Title}>EDUCATION</div>
                <div className={EducationCSS.Content}>
                    {education.map(e=><div className={EducationCSS.Education} key={e.degree}>
                        <div><b>{e.startDate}-{e.endDate}</b> - {e.address}</div>
                        <div className={EducationCSS.Degree}>{e.degree}</div>
                        <div><b>{e.institution}</b></div>
                        <a href={e.website}>{e.website}</a>
                    </div>)}
                </div>
            </div>
        );
    }
}

export default Education;