import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

import {FiFolder} from 'react-icons/fi'

const stack = (
    <div>
        <Button color='teal'>Java</Button>
        <Button color='teal'>Android</Button>
        <Button color='teal'>API</Button>
        <Button color='teal'>RetroFit</Button>
    </div>

);

class SubstopModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="project_modal">
            <div style={{color: '#FFD42C'}}><FiFolder size={32}/></div>
                <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                <h>RunSafe</h>
                <p>Android application relays the user's status and location immediately
                to a designed contact list and emergency services, if necessary.</p>

              <div className="bottom">{stack}</div>
            </div>
        )
    }
}

export default SubstopModal;
