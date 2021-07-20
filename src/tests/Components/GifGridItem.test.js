import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import GifGridItem from "../../Components/GifGridItem";
import React from 'react';

describe('Gif Grid Item test', function () {
    const title = 'Messi champeon';
    const url = 'https://test.com';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a h3 with the title', () => {
        const p = wrapper.find('h3');
        expect(p.text().trim()).toBe(title);
    });

    test('should have a img with the correct url and alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
        
    test('should have a div with the fade in class', () => {
        const div = wrapper.find('div');
        const hasClass = (div.prop('className').includes('animate__fadeIn'));
        expect(hasClass).toBe(true);
    })
    
});