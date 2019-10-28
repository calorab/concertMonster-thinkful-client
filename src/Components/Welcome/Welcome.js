import React, {Component} from 'react';

import Button from '../UI/Button/Button';

export class Welcome extends Component {

    getStartedHandler = () => {
        // alert('You clicked GET STARTED!')
        this.props.history.push('/auth');
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
