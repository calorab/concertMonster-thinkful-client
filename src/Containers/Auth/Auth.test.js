import React from 'react';
import {shallow, mount} from 'enzyme';
import spyOn from 'spyon';
import {Formik, Field} from 'formik';

import Auth from './Auth';
import Button from '../../Components/UI/Button/Button';
import Adapter from '../../setupTests';


describe('<Auth />', () => {
    it('Renders without crashing', () => {
        shallow(<Auth />);
    });

    it('Renders without token', () => {
        let wrapper = shallow(<Auth />);
        expect(wrapper.state('token')).toEqual(null);
    });

    it('Renders as login', () => {
        let wrapper = shallow(<Auth />);
        expect(wrapper.state('isSignup')).toEqual(false);
    });

    it('Should switch to signup when switch button is clicked', () => {
        const wrapper = mount(<Auth /> );
        wrapper.find('.testing2').simulate('click');
        expect(wrapper.state('isSignup')).toEqual(true);
    });
    
    // Working here!!
    it('Should submit onAuthHandler when form is submitted', () => {
        const wrapper = mount(<Auth /> );
        const spy =  jest.spyOn(wrapper.instance(), 'onAuthHandler');
        wrapper.find('.testing1').simulate('submit', {
            target: {
                email: 'test@test.com', 
                password: '123456'
                }
            });
        expect(spy).toHaveBeenCalledTimes(1);

    });

    it('Should not submit onAuthhandler when form is submitted without data', () => {
        const callback = jest.fn();
        const wrapper = mount(<Auth onAuthHandler={callback}/> );
        wrapper.find('.testing1').simulate('click');
        expect(callback).not.toHaveBeenCalled();
    });
});
