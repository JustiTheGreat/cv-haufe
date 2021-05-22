import React, {Component} from 'react';
import ProfileCSS from './Profile.module.css';
import {profilePicture, myName, myOccupation, BGStyle} from './Constants.js'

class Profile extends Component {
    render() {
        return(
            <div className={ProfileCSS.Profile} style={BGStyle}>
                <div className={ProfileCSS.ProfilePicture}>
                    <img style={{width:'100%'}} src={profilePicture} alt='Profile_picture'></img>
                    </div>
                <div className={ProfileCSS.PictureInfo}><b>{myName}</b><br/>{myOccupation}</div>
            </div>
        );
    }
}

export default Profile;