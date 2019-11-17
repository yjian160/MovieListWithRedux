import React from 'react';
import ReactDOM from 'react-dom';
//import MovieList from './MovieList.jsx'
import MovieListContainer from './redux/containers/MovieListContainer'

import { Provider } from 'react-redux';
// import { createStore } from 'redux'; 
// import rootReducer from './redux/reducers'
import store from './redux/store/store'
// const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><MovieListContainer /></Provider>, document.getElementById('app'));