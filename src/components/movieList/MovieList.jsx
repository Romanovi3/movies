import React from 'react';
import MovieItem from "../movieItem/MovieItem.jsx";

const MovieList = ({movieList = []}) => {
    return (
        <div className='movieList'>
            {movieList.length ?
                movieList.map(el=>
                <MovieItem
                    key = {el.imdbID}
                    title= {el.Title}
                    year = {el.Year}
                    type = {el.Type}
                    poster = {el.Poster}
                    />)
                    :
                <p className='preloader'>Movie not found!</p>
            }
        </div>
    );
};

export default MovieList;