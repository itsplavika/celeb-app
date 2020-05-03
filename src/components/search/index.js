import React from 'react';
import './search.css';

const Search = (props) => {
    const [searchValue, searchHandler] = React.useState("");
    const { isSearchCallbackFn } = props;
    const searchandFilterHandler = (e) => {
        const {target} = e;
        isSearchCallbackFn(target.value);
        searchHandler(target.value);
    };

    return (
        <div>
           <input
            type="search"
            className="search"
            onChange={searchandFilterHandler}
            value={searchValue}
            placeholder="Search by Celebrity"
        />
        </div>
    )
}

export default Search;
