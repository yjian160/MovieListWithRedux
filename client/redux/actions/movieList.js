import getMovieList from './../../lib/getMovieList'

export const changeColor = (color) => ({
    type: 'CHANGE_COLOR',
    color: color
});

export const updateMovieList = (movies) => ({
    type: 'UPDATE_MOVIES',
    movies: movies
});

export const getMovies = (dispatch) => {
    return getMovieList((movies) => {
        dispatch(updateMovieList(movies));
    })
};

export const addMovie = (movieName) => ({
    type: 'ADD_MOVIE',
    movieName: movieName
});