import React from 'react';

var AddMovies = ({addMovieText, addMovie, updateAddMovieText}) => (
    <div>
        <input type="text" onChange={(e)=>{updateAddMovieText(e.target.value)}}></input>
        <button onClick={()=>{addMovie(addMovieText)}}>Add Movie</button>
    </div>
);

export default AddMovies;