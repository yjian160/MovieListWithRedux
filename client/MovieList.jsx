import React from 'react';
import SearchBarContainer from './redux/containers/SearchBarContainer';
import AddMovieContainer from './redux/containers/AddMoviesContainer';

var MovieList = ({color, updateColor, movies, searchTerm}) => (
    <div style={{width:'500px', height:'400px', border: '1px solid', backgroundColor: color, paddingTop: '5%'}}>
        <SearchBarContainer />
        <AddMovieContainer />
        {movies.map(movie => {
            console.log(movie)
            if (movie.title.toString().toUpperCase().includes(searchTerm.toString().toUpperCase())) {
                return (<div style={{ marginLeft: '10%', marginRight: '10%', border: '1px solid black'}}>{movie.title}</div>);
            }
        })}
    </div>
);

export default MovieList;