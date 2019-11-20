import { combineReducers } from 'redux';
import movieList from './movieList';
import searchBar from './searchBar';
import addMovie from './addMovie';

export default combineReducers({movieList, searchBar, addMovie});