import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import AddCategory from '../../Components/AddCategory';
import React from 'react';

describe('Add Category Component test', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });
    
    test('should return the correct form', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change textbox input', () => {
        let input = wrapper.find('input');
        const value = 'Hello world';

        input.simulate('change', {
            target: {
                value: value
            }
        });

        const inputRefreshed = wrapper.find('input');
        expect(inputRefreshed.prop('value')).toBe(value);
    });
    
    test('should not call setCategories method if inputValue length is minor or equal than 2', () => {
        
        wrapper.find('form')
            .simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories method and clear the textbox input if inputValue length is greater than 2', () => {

        let input = wrapper.find('input');
        const value = 'Hello world';

        input.simulate('change', {
            target: {
                value: value
            }
        });

        wrapper.find('form')
            .simulate('submit', { preventDefault(){} });
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
            
        input = wrapper.find('input');
        expect(input.prop('value')).toBe('');
    });
        

});