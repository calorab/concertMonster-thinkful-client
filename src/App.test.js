import React from 'react';
import {shallow, mount} from 'enzyme';

import App from './App';
import Adapter from '../src/setupTests';


describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });
});
