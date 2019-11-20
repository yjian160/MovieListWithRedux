const movieList = (state = {color: 'green', movies: [{'title': 'a'}, {'title': 'b'}, {'title': 'c'}]}, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return Object.assign({}, state, {color: action.color || 'red'})
        case 'UPDATE_MOVIES':
            return Object.assign({}, state, {movies: action.movies || []})
        case 'ADD_MOVIE':
            var newState = Object.assign({}, state, {movies: state.movies.slice()});
            newState.movies.push({'title': action.movieName});
            return newState;
        default:
            return state
    }
}

export default movieList;