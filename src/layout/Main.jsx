import React from 'react';
import MovieList from "../components/movieList/MovieList.jsx";
import {useState, useEffect} from "react";
import Search from "../components/search/Search.jsx";
import Filter from "../components/filter/Filter.jsx";


const Main = () => {

    const [movieList, setMovieList] = useState([]);
    const [movie, setMovie] = useState('John Wick');
    const [type, setType] = useState('');

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=bba39dee&s=${movie}&type=${type}`)
            .then(res => res.json())
            .then(data => setMovieList(data.Search))
    }, [movieList, type]);



    return (
        <div className="content">
            <Search
                setMovie={setMovie}
            />
            <Filter
                setType={setType}
            />
            {!movieList.length ?
                <h2 className='preloader'>Loading...</h2>
                :
                <MovieList movieList={movieList}/>
            }
        </div>
    );
};

export default Main;