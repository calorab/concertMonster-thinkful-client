import React, {Component} from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import axios from 'axios';

import classes from './Auth.module.css';

class Login extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        loading: false,
        isSignup: false
    }
//CALEB - working here when you left off - not done with Axios call
    onAuthHandler = () => {      
        let apiEndpoint = 'http://localhost:8080/auth/login';
        if (this.state.isSignup) {
            apiEndpoint = 'http://localhost:8080/auth/signup'
        }
        axios({
            method: 'post',
            url: apiEndpoint,
            data: {
                email: 'test@test.com', 
                password: '12345'
            }
        })
        .then(response => {
            alert(response);
            // this.props.history.push('/dashboard');
        })
        .catch(err => {
            alert(err);
        });
    };
// I'm getting the following error: [HMR] Waiting for update signal from WDS...

    switchAuthModeHandler = () => {
        console.log('state switched');
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        });
    };

    render() {
        let formElementsArray = [];
        for (let element in this.state.controls) {
            formElementsArray.push({
                id: element,
                config: this.state.controls[element]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementConfig={formElement.config.elementConfig}
                defaultValue={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched} 
            />
        ));

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.Auth}>
                {this.state.isSignup ? <h3>Signup</h3> : <h3>Login</h3>}
                <form >
                    {form}
                    <Button btnType='Success' clicked={this.onAuthHandler}>
                        {this.state.isSignup ? 'SIGNUP' : 'LOGIN'}
                    </Button>
                </form>
                <Button btnType='Danger' 
                    clicked={this.switchAuthModeHandler}>
                    {this.state.isSignup ? 'LOGIN ' : 'SIGNUP '}INSTEAD?
                </Button>
            </div>
        );
    };
}

export default Login;
