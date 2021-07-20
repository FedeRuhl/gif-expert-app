import '@testing-library/jest-dom';
import useFetchGifs from '../../Hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('use Fetch Gifs Hook test', () => {

    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Messi'));
        const { data, loading }  = result.current;

        await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(loading).toBe(true);
    });
    
    test('should return an images array and loading in falses', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Messi'));
        await waitForNextUpdate();

        const { data, loading }  = result.current;
        expect(data.length).toBe(data.length);
        expect(loading).toBe(false);
    });
    

});