import React, { Component } from 'react';

class UserDetail extends Component {

    constructor() {
        super();

        this.state = {
            city: 'Salford'
        };
    }

    updateCity = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    // updateCity = (event) => {
    //        let inputBox= event.target.value
 
    // }

    handleSubmit = (event) => {
        this.setState({
            city: this.state.input
        });
        // alert('City was submitted: ' + this.state.city);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <p>User details page works...</p>
                <br></br>
                <p>First name: {this.props.userData.firstName}</p>
                <p>Last name: {this.props.userData.lastName}</p>
                <p>DOB: {this.props.userData.dateOfBirth}</p>
                <p>City: {this.state.city}</p>
                <br></br>
                <p>{this.props.sendword}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        city:
                    <input
                            type="text"
                            placeholder="city"
                            onChange={this.updateCity}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default UserDetail;