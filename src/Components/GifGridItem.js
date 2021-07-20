import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate_animated animate__fadeIn">
            <h3>{ title }</h3>
            <img src={ url } alt={ title }/>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem