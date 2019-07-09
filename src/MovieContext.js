import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [ movies, setMovies ] = useState( [
        {
            name: 'Harry Potter',
            price: '10€',
            id: 2396743
        },
        {
            name: 'Game of Thrones',
            price: '15€',
            id: 2346578
        },
        {
            name: 'Inception',
            price: '12€',
            id: 23534454
        }
    ] );

    return <MovieContext.Provider
        value={ [ movies, setMovies ] }>
        { props.children }
    </MovieContext.Provider>;
};

