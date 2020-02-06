import React, {Component} from 'react';
import Button from '../../Components/UI/Button/Button';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Aux from '../../Containers/hoc/Aux/Aux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import classes from './Auth.module.css';

class Login extends Component {

    state = {
        loading: false,
        isSignup: false,
        error: '',
        token: null,
        userId: null,
    }

    componentDidMount = () => {
        if (sessionStorage.getItem('token') && sessionStorage.getItem('token') !== "undefined") {
            this.props.history.push('/dashboard');
        } 
    };
 

    onAuthHandler = (event) => {      
        event.preventDefault();
        let apiEndpoint = 'https://concertmonster.herokuapp.com/auth/login';
        if (this.state.isSignup) {
            apiEndpoint = 'https://concertmonster.herokuapp.com/auth/signup'
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
            return response.json();
        })
        .then(data => {
            if (data.message) {
                this.setState({error: data.message});
                throw new Error(data.message);
            }
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('userId', data.userId);
            this.props.history.push('/dashboard');
        })
        .catch(err => {
            console.log(err);
            return err;
        });
    };

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup}
        });
    };

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
                    this.onAuthHandler();
                }}>
                <Form className='testing' onSubmit={this.onAuthHandler} >
                    <Field name="email" type="email" className={classes.InputElement} placeholder='Your Email' />
                    <ErrorMessage name="email" />
                    <Field name="password" type="" className={classes.InputElement2} placeholder='Your Password' />
                    <ErrorMessage name="password" />
                    <br></br>
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

        return (
            <Aux >
                <div>
                    {this.state.isSignup ? <h3>Signup</h3> : <h3>Login</h3>}   
                </div>
                <div className={classes.Auth}>
                    {form} 
                    {this.state.error ? <p>{this.state.error}</p> : null}
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