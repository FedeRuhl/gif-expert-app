// import PropTypes from 'prop-types';
// import {useState} from 'react';

import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h1>Gif expert app</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            {
                <ol>
                    {
                        categories.map(category => {
                            return <GifGrid
                                key={ category }
                                category={ category }
                            />
                        })
                    }
                </ol>
            }
        </>
    );
}

export default GifExpertApp;