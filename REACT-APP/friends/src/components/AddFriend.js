import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend } from '../actions';

class AddFriend extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            index: ''
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        });
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handleIndexChange = (event) => {
        this.setState({
            index: event.target.value
        });
    };


    newFriend = (event) => {
        event.preventDefault();
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email,
            index: this.state.index
        };
        this.props.dispatch(addFriend(newFriend));
        this.setState({
            name: '',
            age: '',
            email: '',
            index: ''
        });
    };

    updateFriend = (event) => {
        event.preventDefault();
        if (!this.state.index) {
            return;
        }
        const data = {
            index: parseInt(this.state.index),
            update: {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email
            }
        };
        this.props.dispatch(updateFriend(data));
        this.setState({
            name: '',
            age: '',
            email: '',
            index: ''
        }); 
    };

    render() {
        return (
            <div>
                <input value={this.state.index} onChange={this.handleIndexChange} placeholder="Index" />
                <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" />
                <input value={this.state.age} onChange={this.handleAgeChange} placeholder="Age" />
                <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" />
                <button onClick={this.newFriend}>Add</button>
                <button onClick={this.updateFriend}>Update</button>
            </div>
        );
    }
}

export default connect()(AddFriend);