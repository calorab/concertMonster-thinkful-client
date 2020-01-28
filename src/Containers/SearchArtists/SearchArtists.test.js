import React from 'react';
import {shallow, mount} from 'enzyme';
import {Field} from 'formik';

import SearchArtists from './SearchArtists';
import Adapter from '../../setupTests';


describe('<SearchArtists />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchArtists />);
    });

    it('Should NOT call submitHandler without entering input', () => {
        const callback = jest.fn();
        const wrapper = mount(<SearchArtists submitHandler={callback}/> );
        wrapper.find('.testing3').simulate('click');
        expect(callback).toHaveBeenCalledTimes(0);
    });
});