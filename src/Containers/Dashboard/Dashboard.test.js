import React from 'react';
import {shallow, mount} from 'enzyme';

import Dashboard from './Dashboard';
import Adapter from '../../setupTests';

//HELP --- Wont pass, error: " TypeError: Cannot read property 'push' of undefined  " in Dashboard CDM
describe('<Dashboard />', () => {
    it('Renders without crashing', () => {
        shallow(<Dashboard />);
    });

    it('Renders with showArtist = false', () => {
        let wrapper = shallow(<Dashboard />);
        expect(wrapper.state('showArtists')).toEqual(false);
    });

    it('Should change showArtist state on toggle method', () => {
        const wrapper = shallow(<Dashboard />);
        wrapper.instance().toggleMyArtists();
        expect(wrapper.state('showArtists')).toEqual(true);
    });
});