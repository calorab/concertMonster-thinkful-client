import React, {Component} from 'react';
import Input from '../../Components/UI/Input/Input';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {updateObject, checkValidity} from '../../Utility/utility';
import Aux from '../../Containers/hoc/Aux/Aux';
import { Formik, Field, Form, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';


import classes from './Auth.module.css';

class Login extends Component {

    state = {
        loading: false,
        isSignup: false,
        error: '',
        token: null,
        userId: null,
        formIsValid: false
    }

    componentDidMount = () => {
        if (sessionStorage.getItem('token') && sessionStorage.getItem('token') !== "undefined") {
            this.props.history.push('/dashboard');
        } 
    };


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
                email: event.target.email.value, 
                password: event.target.password.value
            })
        })
        .then(response => {
            // if (response.status !== 200) {
            //     console.log('status error');
            //     const error = new Error(response.message);
            //     throw error;
            // }
            console.log('RESPONSE', response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.message) {
                throw new Error(data.message);
            }
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            console.log(sessionStorage);
            this.props.history.push('/dashboard');
        })
        .catch(err => {
            console.log(err);
            this.setState({error: err});
        });
    };

    switchAuthModeHandler = () => {
        console.log('state switched');
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        });
    };

    // onModalClosed = () => {
    //     this.setState({error: false});
    // }

    render(props) {

        let form = 
            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .min(5, 'Too short - minimum 5 characters!')
                    .required('Required')
                })}
                onSubmit={({ setSubmitting }) => {
                    // withFormik({mapPropsToValues: }) 
                    this.onAuthHandler();
                }}>
                <Form onSubmit={this.onAuthHandler} >
                    <Field name="email" type="email" className={classes.InputElement} placeholder='Your Email' />
                    <ErrorMessage name="email" />
                    <Field name="password" type="text" className={classes.InputElement} placeholder='Your Password' />
                    <ErrorMessage name="password" />
                    <Button 
                        className='testing1' 
                        btnType='Success'
                        type='submit'>
                        {this.state.isSignup ? 'SIGNUP' : 'LOGIN'}
                    </Button>
                </Form>
            </Formik>;


        if (this.state.loading) {
            form = <Spinner />;
        }
        let errorMessage;
        if (this.state.error) {
            errorMessage = <p>{this.state.error.toString()}</p>
        }

        return (
            <Aux >
                <div>
                    {this.state.isSignup ? <h3>Signup</h3> : <h3>Login</h3>}   
                </div>
                <div className={classes.Auth}>
                    {form} 
                    {errorMessage}
                </div>
                <Button className='testing2' btnType='Danger' 
                    clicked={this.switchAuthModeHandler}>
                    {this.state.isSignup ? 'LOGIN ' : 'SIGNUP '}INSTEAD?
                </Button>
            </Aux>
        );
    };
}

export default Login;