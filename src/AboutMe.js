import React, {Component} from 'react';
import AboutMeCSS from'./Block.module.css';
import { info, BGStyle } from './Constants.js';

class AboutMe extends Component {
    render() {
        return(
            <div className={AboutMeCSS.Block} style={BGStyle}>
                <div className={AboutMeCSS.Title}>ABOUT ME</div>
                {info.map(i=><div className={AboutMeCSS.Info}><b>{i.key}</b> {i.val}</div>)}
            </div>
        );
    }
}

export default AboutMe;