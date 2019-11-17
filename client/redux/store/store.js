import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'

export default createStore(
    rootReducer,
    {movieList: {color: 'yellow', movies: ['a', 'b', 'c']}},
    applyMiddleware(thunk)
);