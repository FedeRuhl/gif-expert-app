import getGifs from '../../Helpers/getGifs';

describe('get Gifs helper test', () => {

   test('should fetch 10 elements', async() => {
       const gifs = await getGifs('Messi');

       expect(gifs.length).toBe(10);
   });

   test('should fetch empty array if category is an empty string', async() => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
   });
   
    
});