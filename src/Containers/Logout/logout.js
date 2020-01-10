import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Logout extends Component {

    componentDidMount () {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('userid');
    }

    render() {
        return <Redirect to="/" />
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default Logout;