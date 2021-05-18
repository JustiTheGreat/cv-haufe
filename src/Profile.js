import React, {Component} from 'react';
import './Profile.css';
import {profilePicture, myName, myOccupation} from './Constants.js'
import {BGStyle} from './Constants';

class Profile extends Component {
    render() {
        return(
            <div className="Profile" style={BGStyle}>
                <div className="ProfilePicture"><img style={{width:'100%'}} src={profilePicture}></img></div>
                <div className="PictureInfo"><b>{myName}</b><br />{myOccupation}</div>
            </div>
        );
    }
}

export default Profile;