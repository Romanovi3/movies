import React from 'react';
import {useState} from 'react'

const Filter = ({setType}) => {

    const [filter, setFilter] = useState({
        all:'',
        movie: 'movie',
        series: 'series',
        game: 'game'
    });
    async function filterMovies (e){
        const {value} = e.currentTarget;

        setType(value)
    }

    return (
        <form action="#" className='filter__form'>
            <p><span>All</span>
                <input
                    type='radio'
                    name='movieType'
                    value={filter.all}
                    onClick={filterMovies}
                />
            </p>
            <p><span>Movie</span>
                <input
                    type='radio'
                    name='movieType'
                    value={filter.movie}
                    onClick={filterMovies}
                />
            </p>
            <p><span>Series</span>
                <input
                    type='radio'
                    name='movieType'
                    value={filter.series}
                    onClick={filterMovies}
                />
            </p>
            <p><span>Game</span>
                <input
                    type='radio'
                    name='movieType'
                    value={filter.game}
                    onClick={filterMovies}
                />
            </p>
        </form>
    );
};

export default Filter;