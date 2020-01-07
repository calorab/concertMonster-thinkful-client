import React, {Component} from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {updateObject, checkValidity} from '../../Utility/utility';
import Aux from '../../Containers/hoc/Aux/Aux';

import classes from './Auth.module.css';
import Modal from '../../Components/UI/Modal/modal';

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
        isSignup: false,
        error: false
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value
            })
        });
        this.setState({controls: updatedControls});
    }
    // for above once checkin validity --: valid: checkValidity(event.target.value, 
    // this.state.controls[controlName].validation), touched: true

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
                email: this.state.controls.email.value, 
                password: this.state.controls.password.value
            })
        })
        .then(response => {
            console.log('RESPONSE', response);
            if (response.status !== 200) {
                this.setState({error: true});
                console.error(this.state.error);
            } else {
                this.props.history.push('/dashboard');
            }
            
            // add in modal or error display ----- ASK ABOUT BETTER WAY TO DO THE ABOVE
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

    onModalClosed = () => {
        this.setState({error: false});
    }

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
                startValue={formElement.config.elementConfig.type}
                defaultValue={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched} 
                inputName={formElement.config.elementConfig.type}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
        ));


        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <Aux className={classes.Auth}>
                {this.state.isSignup ? <h3>Signup</h3> : <h3>Login</h3>}
                <form >
                    {form}
                    <Button btnType='Success' clicked={this.onAuthHandler}>
                        {this.state.isSignup ? 'SIGNUP' : 'LOGIN'}
                    </Button>
                </form>
                <Modal 
                    show={this.state.error} 
                    modalClosed={this.onModalClosed}>
                    The email/password combo is incorrect
                </Modal>
                <Button btnType='Danger' 
                    clicked={this.switchAuthModeHandler}>
                    {this.state.isSignup ? 'LOGIN ' : 'SIGNUP '}INSTEAD?
                </Button>
            </Aux>
        );
    };
}

export default Login;
