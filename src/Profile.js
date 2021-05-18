import React, {Component} from 'react';
import './Profile.css';
import {profilePicture, myName, myOccupation} from './Constants.js'

class Profile extends Component {
    render() {
        return(
            <div className="Profile">
                <div className="ProfilePicture"><img style={{width:'100%'}} src={profilePicture}></img></div>
                <div className="PictureInfo"><p>{myName}<br />{myOccupation}</p></div>
            </div>
        );
    }
}

export default Profile;