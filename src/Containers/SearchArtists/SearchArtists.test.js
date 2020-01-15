import React from 'react';
import {shallow, mount} from 'enzyme';

import SearchArtists from './SearchArtists';
import Input from '../../Components/UI/Input/Input';
import Adapter from '../../setupTests';


describe('<SearchArtists />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchArtists />);
    });

    // it('Renders with showArtist = false', () => {
    //     let wrapper = shallow(<SearchArtists />);
    //     expect(wrapper.state('showArtists')).toEqual(false);
    // });

    // it('Should change showArtist state on toggle method', () => {
    //     const wrapper = shallow(<SearchArtists />);
    //     wrapper.instance().toggleMyArtists();
    //     expect(wrapper.state('showArtists')).toEqual(true);
    // });

    it('Should NOT call submitHandler without entering input', () => {
        const callback = jest.fn();
        const wrapper = mount(<SearchArtists submitHandler={callback}/> );
        wrapper.find('.testing').simulate('click');
        expect(callback).not.toHaveBeenCalled();
    });

    it('Should call submitHandler when search submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<SearchArtists submitHandler={callback}/> );
        const value = 'Alison';
        wrapper.find(Input).instance().value = value;
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
});