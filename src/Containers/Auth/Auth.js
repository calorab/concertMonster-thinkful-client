import React, {Component} from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import axios from '../../axios-instance';

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
        let apiEndpoint = '/auth/login';
        if (this.state.isSignup) {
            apiEndpoint = '/auth/signup'
        }
        axios.post(apiEndpoint,);
    };

    onLoginhandler = () => {
        this.props.history.push('/dashboard');
    }

    switchAuthModeHandler = () => {
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

        let form = <form onSubmit={this.onLoginhandler}> {
                formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched} />
            ))}
                
                <Button btnType='Danger' 
                    onClick={this.switchAuthModeHandler}>
                    {this.state.isSignup ? 'LOGIN ' : 'SIGNUP '}INSTEAD?
                </Button>
                <Button btnType='Success' 
                    onClick={this.authHandler}>
                    {this.state.isSignup ? 'SIGNUP' : 'LOGIN'}
                </Button>
        </form>;

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.Auth}>
                {this.state.isSignup ? <h3>Signup</h3> : <h3>Login</h3>}
                {form}
            </div>
        );
    };
}

export default Login;
