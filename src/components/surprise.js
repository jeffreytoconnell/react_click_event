// THIS GOES TO INDEX.JS

import React from 'react';
import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'button'  // INITIALLY WILL DISPLAY 'BUTTON' ??
        }
    }

    showImage() {
        this.setState({
            display: 'image'  // ??
        });
    }

    render() {
        if (this.state.display === 'button') {
            return <SurpriseButton onClick={event => this.showImage()}/>;  // FROM ABOVE BUTTON LIVES IN SURPRISEBUTTON / ON CLICK RUN SHOWIMAGE FUNCTION
        }
        else if (this.state.display === 'image') {
            return <SurpriseImage />;  // FROM ABOVE GOES TO SURPRISE IMAGE AND DISPLAYS
        }
    }
}
