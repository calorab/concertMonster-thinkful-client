import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavItem from './NavItem/Navitem';
import NavigationItems from './NavigationItems';
import { exportAllDeclaration } from '@babel/types';

configure({adapter: new Adapter()});

describe('<NavigationItems />',() => {
    it('should render 2 nav items if not authenticated', () => {
        const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(NavItem)).toHaveLength(0);
    });
});