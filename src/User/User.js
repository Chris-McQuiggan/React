import React, { Component } from 'react';
import UserDetail from './UserDetail.js';

class User extends Component {
    UserData = {
        firstName: "Hannah",
        lastName: "Smith",
        dateOfBirth: "01/01/1990",
        city: "Slaford"
    }
    render() {
        return (
            <div>
                <h1>User</h1>
                <p>{this.props.sendword1} {this.props.sendword2}</p>
                <UserDetail
                    sendword={this.props.sendword3}
                    userData={this.UserData}>
                </UserDetail>
            </div>
        );
    }
}

export default User;