import React, {Component} from 'react';
import classes from './Welcome.module.css';

import Button from '../../Components/UI/Button/Button';

export class Welcome extends Component {

    state = {
        token: false
    }

    componentDidMount = () => {
        if (sessionStorage.getItem('token')) {
            this.setState({token: true});
        } 
    };

    getStartedHandler = () => {
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

                <p className={classes.Paragraph} >Thanks for checking out my app! ConcertMonster will 
                    help you search for artists or bands that you like, follow them and get information 
                    on when they are touring - all using the SongKick API. Click the <strong>Get Started</strong> button 
                    below to create an account or sign in using the Guest account listed below. 
                    Once you have signed in, you can search for artists and 
                    follow them. When you follow an artists it is added to your Followed Artists List which 
                    you can toggle by clicking the button at the top of your dashboard. You can find
                    more information on the artists including buying tickets by following the link for the 
                    respective artist in your Followed Artists List. Have fun!</p>
                    <p>Guest Account:</p>
                    <p>Email: test@test.com</p>
                    <p>Password: 12345</p>
                <Button btnType='Success' clicked={this.getStartedHandler}>GET STARTED</Button>
            </div>
        );
    }
};

export default Welcome;
