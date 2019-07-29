import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        return (
            <div>
                <p>User details page works...</p>
                <br></br>
                <p>First name: {this.props.userData.firstName}</p>
                <p>Last name: {this.props.userData.lastName}</p>
                <p>DOB: {this.props.userData.dateOfBirth}</p>
                <p>City: {this.props.userData.city}</p>
                <br></br>
                <p>{this.props.sendword}</p>
            </div>
        );
    }
}

export default UserDetail;