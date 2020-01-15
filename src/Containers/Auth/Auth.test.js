import React from 'react';
import {shallow, mount} from 'enzyme';

import Auth from './Auth';
import Button from '../../Components/UI/Button/Button';
import Adapter from '../../setupTests';


describe('<Welcome />', () => {
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
        wrapper.find('.testing').simulate('click');
        expect(wrapper.state('isSignup')).toEqual(true);
        expect(wrapper)
    });

    // it('Should submit onAuthhandler when form is submitted', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<Auth /> );
    //     wrapper.find('.testing').simulate('click');
    //     expect(wrapper.state('isSignup')).toEqual(true);
    //     expect(wrapper)
    // });
});