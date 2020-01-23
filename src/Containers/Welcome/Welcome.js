import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import Button from '../../Components/UI/Button/Button';

export class Welcome extends Component {

    state = {
        token: false
    }

    componentDidMount = () => {
        if (sessionStorage.getItem('token')) {
            // this.props.history.push('/dashboard');
            this.setState({token: true});
        } 
    };

    getStartedHandler = () => {
        // console.log(this.state);
        if (this.state.token) {
            this.props.history.push('/dashboard');
        }
        else {
            this.props.history.push('/auth');
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to Concert Monster!</h1>
                <Button btnType='Success' clicked={this.getStartedHandler}>GET STARTED</Button>
            </div>
        );
    }
};

export default Welcome;
