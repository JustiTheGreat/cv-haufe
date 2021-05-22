import React, {Component} from 'react';
import LanguagesCSS from './Block.module.css';
import {BGStyle, language_skills as ls} from './Constants.js';

class Languages extends Component {
    render() {
        return(
            <div className={LanguagesCSS.Block} style={BGStyle}>
                <div className={LanguagesCSS.Title}>LANGUAGE SKILLS</div>
                <div className={LanguagesCSS.Content}>
                    <div><b>Mother tongue(s):</b> {ls.mother_tongue}<br/><b>Other language(s):</b></div>
                    {ls.languages.map(l=>
                        <div className={LanguagesCSS.Language} key={l.name}>
                            <div><b>Language:</b> {l.name}</div>
                            <br/>
                            <tbody>
                                <tr>{ls.categories.map(c=><td style={{width:ls.cat_width}}><b>{c}</b></td>)}</tr>
                                <tr>{l.c.map(c=><td>{c}</td>)}</tr>
                            </tbody>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Languages;