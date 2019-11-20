import { connect } from 'react-redux';
import SearchBar from './../../components/SearchBar.jsx';
import { updateSearchText } from './../actions/searchBar';

var mapStateToProps = (state) => ({
    searchTerm: state.searchBar
});

var mapDispatchToProps = (dispatch) => ({
    updateSearchText: (searchTerm) => {
        dispatch(updateSearchText(searchTerm));
    }
})

const SearchBarContainer = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default SearchBarContainer;