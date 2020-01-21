import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    // let inputClasses = [classes.InputElement]
    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid)
    // }

    return (
        <div className={classes.Input}>
            <input
                className={classes.InputElement}
                {...props.elementConfig}
                placeholder={props.startValue}
                onChange={props.changed} 
                name={props.inputName}
                value={props.inputValue}/>
        </div>
    );
}

export default Input;