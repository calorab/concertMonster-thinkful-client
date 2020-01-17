import React from 'react';
import {shallow, mount} from 'enzyme';
import spyOn from 'spyon';

import FollowedArtists from './FollowedArtists';
import Input from '../../Components/UI/Input/Input';
import Adapter from '../../setupTests';


describe('<SearchArtists />', () => {
    it('Renders without crashing', () => {
        shallow(<FollowedArtists />);
    });
    // HELP - 
    it('Should call getMyArtistsHandler on componentDidMount', () => {
        const wrapper = mount(<FollowedArtists /> );
        const spy =  jest.spyOn(wrapper.instance(), 'getMyArtistsHandler');
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalledTimes(1);
    });
});