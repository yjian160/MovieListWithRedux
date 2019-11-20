import { connect } from 'react-redux';
import AddMovies from './../../components/AddMovies.jsx';
import { addMovie } from './../actions/movieList';
import { updateAddMovieText } from './../actions/addMovie';

var mapStateToProps = (state) => ({
    addMovieText: state.addMovie
})

var mapDispatchToProps = (dispatch) => ({
    addMovie: (movieName) => {
        dispatch(addMovie(movieName))
    },
    updateAddMovieText: (movieName) => {
        dispatch(updateAddMovieText(movieName))
    }
})

var AddMoviesContainer = connect(mapStateToProps, mapDispatchToProps)(AddMovies);

export default AddMoviesContainer;