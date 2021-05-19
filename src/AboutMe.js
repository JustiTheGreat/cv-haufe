import React, {Component} from 'react';
import AboutMeCSS from'./Block.module.css';
import { gender, dateOfBirth, nationality, adress, email, tel, BGStyle } from './Constants.js';

class AboutMe extends Component {
    f (tag,info) {
        return(
            <div className={AboutMeCSS.Info}><b>{tag}</b> {info}</div>
        );
    }
    
    render() {
        return(
            <div className={AboutMeCSS.Block} style={BGStyle}>
                <div className={AboutMeCSS.Title}>ABOUT ME</div>
                {this.f('Gender:',gender)}
                {this.f('Date of birth:',dateOfBirth)}
                {this.f('Nationality:',nationality)}
                {this.f('Address:',adress)}
                {this.f('Email:',email)}
                {this.f('Telephone number:',tel)}
            </div>
        );
    }
}

export default AboutMe;