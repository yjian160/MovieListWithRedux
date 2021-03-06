import { connect } from 'react-redux';
import MovieList from './../../MovieList.jsx'
import { changeColor, updateMovieList } from '../actions/movieList'

var mapStateToProps = (state) => ({
    color: state.movieList.color,
    movies: state.movieList.movies,
    searchTerm: state.searchBar
});

var mapDispatchToProps = (dispatch) => ({
    updateColor: (color) => {
        dispatch(changeColor(color));
    }
});

const MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList); 

export default MovieListContainer;