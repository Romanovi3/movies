import {useState} from 'react';
import React from 'react'

const Search = ({setMovie}) => {

    const [searchFilm, setSearchFilm] = useState('');

    async function handleSearch() {
        await setMovie(searchFilm);

        setSearchFilm('')
    }


    return (
        <div className="search">
            <input
                className="search__input"
                type="text"
                placeholder="Search..."
                value={searchFilm}
                onChange={(e) => setSearchFilm(e.target.value)}
                onKeyUp={(e) => {
                    e.key === 'Enter' && handleSearch()
                }}
            />
        </div>
    );
};

export default Search;