import React from 'react';
import styles from './css/styles.css'

var MovieList = ({color, updateColor, movies}) => (
    <div style={{width:'500px', height:'500px', border: '1px solid', backgroundColor: color}}>
        {console.log("C:", color, updateColor)}
        <button onClick={() => updateColor(color === 'red' ? 'blue' : 'red')}>Click Me!</button>
        <ul>
            {movies.map(movie => {
                return (<li>{movie.title}</li>);
            })}
        </ul>
    </div>
);

export default MovieList;