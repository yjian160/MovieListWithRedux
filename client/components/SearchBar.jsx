import React from 'react';

var searchText = '';
var SearchBar = ({updateSearchText, searchTerm}) => (
    <div>
        <input type='text' onChange={(e)=>{searchText = e.target.value}}></input>
        <button onClick={() => {updateSearchText(searchText)}}>Search</button>
    </div>
);

export default SearchBar;