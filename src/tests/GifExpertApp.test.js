import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';
import React from 'react';

describe('Gif Expert App component test', () => {

    test('should show the componente correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
       expect(wrapper).toMatchSnapshot(); 
    });

    test('should show a categories list', () => {
        const defaultCategories = ['Samurai X', 'Maradona'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ defaultCategories } />);

        expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
    });
    
    
});