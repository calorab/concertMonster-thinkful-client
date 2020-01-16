import React from 'react';
import {shallow, mount} from 'enzyme';

import Welcome from './Welcome';
import Adapter from '../../setupTests';


describe('<Welcome />', () => {
    it('Renders without crashing', () => {
        shallow(<Welcome />);
    });

    it('Renders without token', () => {
        let wrapper = shallow(<Welcome />);
        expect(wrapper.state('token')).toEqual(false);
    });
});
