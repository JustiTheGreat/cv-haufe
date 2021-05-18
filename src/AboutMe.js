import React, {Component} from 'react';
import { gender, dateOfBirth, nationality, adress, email, tel } from './Constants';
import './Block.css';
import {BGStyle} from './Constants';

class AboutMe extends Component {
    f (tag,info) {
        return(
            <div className="Info"><b>{tag}</b> {info}<br/></div>
        );
    }
    
    render() {
        return(
            <div className="Block" style={BGStyle}>
                <div className="Title">About Me</div>
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