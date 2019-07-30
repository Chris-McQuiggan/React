import React, { Component } from 'react';

class Time extends Component {

    constructor() {
        super();

        // Initialising the state
        this.state = {
            curTime: new Date().toLocaleString()
        };
    }
    timeClick = () => {
        this.setState({
            curTime: new Date().toLocaleString()
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Time: {this.state.curTime}</h1>
                <button
                    onClick={this.timeClick}>
                    update time
                </button>
            </div>
        );
    }
}

export default Time;