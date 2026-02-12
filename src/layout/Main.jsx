import React from 'react';
import MovieList from "../components/movieList/MovieList.jsx";
import {useState, useEffect} from "react";
import Search from "../components/search/Search.jsx";
import Filter from "../components/filter/Filter.jsx";

const API_KEY = import.meta.env.VITE_API_KEY


const Main = () => {

    const [movieList, setMovieList] = useState([]);
    const [movie, setMovie] = useState('John Wick');
    const [type, setType] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}&type=${type}`)
            .then(res => res.json())
            .then(data => setMovieList(data.Search))
            .then(() => setLoading(true))
            .catch(() => setLoading(false));
    }, [movie, type]);


    return (
        <div className="content">
            <Search
                setMovie={setMovie}
            />
            <Filter
                setType={setType}
            />
            {!loading ?
                <h2 className='preloader'>Loading...</h2>
                :
                <MovieList movieList={movieList}/>
            }
        </div>
    );
};

export default Main;