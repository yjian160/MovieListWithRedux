const searchBar = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_SEARCH_TEXT' :
            return action.searchTerm || '';
        default:
            return state;
    }
}

export default searchBar;