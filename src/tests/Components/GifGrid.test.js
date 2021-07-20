import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../Components/GifGrid';
import React from 'react';
import useFetchGifs from '../../Hooks/useFetchGifs';
jest.mock('../../Hooks/useFetchGifs');

describe('GifGrid component test', () => {

    const category = 'Messi';

    test('should show the component correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show items when images are loaded', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'http://test',
                title: 'ABC'
            },
            {
                id: 'ABC2',
                url: 'http://test2',
                title: 'ABC2'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    });
    

});