import React from 'react';
import {shallow, mount} from 'enzyme';

import Dashboard from './Dashboard';
import Adapter from '../../setupTests';

//HELP --- Wont-pass-'push'-error fixed by && history prop in Dashboard CDM LS Method - alternate fix: 
//pass 'history={{push: () => {}}' as prop to <Dashbpoard />
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
