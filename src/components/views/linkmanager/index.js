import React, { Component } from 'react';
import { saveLink, getCookie } from '../../../calls/index';

class LinkManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            link: ""
        }

        this.saveLink = this.saveLink.bind(this);
    }

    saveLink() {
        saveLink(this.state.link, getCookie('login')).then((response) => {
            console.log(response);
        })
    }

    render() {
        return(
            <div className="pagewrap">
                <input placeholder="link to save" value={this.state.link} onChange={(e) => this.setState({link: e.target.value})}/>
                <div onClick={this.saveLink}>save link</div>
                Link Management
            </div>
        );
    }
}

export default LinkManager;