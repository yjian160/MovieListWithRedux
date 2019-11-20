const addMovie = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_ADD_MOVIE_TEXT':
            return action.movieName
        default: 
            return state;
    }
};

export default addMovie;