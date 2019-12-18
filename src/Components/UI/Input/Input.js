import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    // let inputClasses = [classes.InputElement]
    // if (props.invalid && props.shouldValidate && props.touched) {
    //     inputClasses.push(classes.Invalid)
    // }

    return (
        <div className={classes.Input}>
            <input
                className={classes.InputElement}
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.changed} />
        </div>
    );
}

export default input;
