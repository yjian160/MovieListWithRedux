const movieList = (state = {color: 'green', movies: ['a', 'b', 'c']}, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return Object.assign({}, state, {color: action.color || 'red'})
        case 'UPDATE_MOVIES':
            return Object.assign({}, state, {movies: action.movies || []})
        default:
            return state
    }
}

export default movieList;