import React from 'react';
import ReactDOM from 'react-dom';
import MovieListContainer from './redux/containers/MovieListContainer'

import { Provider } from 'react-redux';
import store from './redux/store/store'
import { getMovies } from './redux/actions/movieList'

ReactDOM.render(
    <Provider store={store}>
        <MovieListContainer />
    </Provider>, 
    document.getElementById('app'),
    () => getMovies(store.dispatch)
);