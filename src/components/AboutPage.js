import React, { Component } from 'react';

class AboutPage extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <React.Fragment>
                <h2>About</h2>
                <p>This app uses React</p>
            </React.Fragment>
        )

    }
}

export default AboutPage