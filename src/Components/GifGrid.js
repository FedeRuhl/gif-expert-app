import React from 'react';
import useFetchGifs from '../Hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const { data: gifs, loading } = useFetchGifs(category);

    return (
        <>
            <h2>{ category }</h2>

            { loading && <p className="animate__animated animate__flash"> Cargando... </p> }

            <div className="card-grid">

                {
                    gifs.map((gif) => 
                    <GifGridItem 
                        key={ gif.id }
                        {...gif}
                    />)
                }
                
            </div>
        </>
    )
}

export default GifGrid
