import React from 'react';
import AddMovie from './AddMovie';
import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';

const App = () => {

    return (
        <MovieProvider>
            <div className="app">
                <Nav/>
                <AddMovie/>
                <MovieList/>
            </div>
        </MovieProvider>
    );
};

export default App;
