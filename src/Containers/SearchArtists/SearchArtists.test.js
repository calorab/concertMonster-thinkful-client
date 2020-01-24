import React from 'react';
import {shallow, mount} from 'enzyme';
import spyOn from 'spyon';

import SearchArtists from './SearchArtists';
import Input from '../../Components/UI/Input/Input';
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
    
    it('Should call submitHandler when search submitted', () => {
        const wrapper = mount(<SearchArtists /> );
        const spy =  jest.spyOn(wrapper.instance(), 'submitHandler');
        wrapper.setState({searchValue: 'alison'});
        wrapper.find('.testing3').simulate('submit');
        expect(spy).toHaveBeenCalledTimes(1);
    });
});