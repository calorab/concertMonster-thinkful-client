import React, {Component} from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';


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
    onAuthHandler = (event) => {      
        event.preventDefault();
        let apiEndpoint = 'http://localhost:8080/auth/login';
        if (this.state.isSignup) {
            apiEndpoint = 'http://localhost:8080/auth/signup'
        }
        
        fetch(apiEndpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                email: 'test1@test.com', 
                password: '12345'
            })
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log('DATA', data);
            this.props.history.push('/dashboard');
        })
        .catch(err => {
            console.log(err);
        });
    };

    switchAuthModeHandler = () => {
        console.log('state switched');
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        });
    };

    render() {
        let formElementsArray = [];
        for (let element in this.state.controls) {
            console.log(element);
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
