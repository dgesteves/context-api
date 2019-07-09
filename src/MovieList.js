import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {

    const [ movies, setMovies ] = useContext( MovieContext );

    return (
        <div>
            {
                movies.map( movie => {
                    const { id, name, price } = movie;
                    return (
                        <Movie key={ id } name={ name }
                               price={ price }/>
                    );
                } )
            }
        </div>
    );
};

export default MovieList;
