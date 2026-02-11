import React from 'react';

const MovieItem = ({title, year, poster, type}) => {
    return (
        <div className="movieCard">
            <div className="movieCard__poster">
                { poster === 'N/A' ?
                    <img src={`https://placehold.co/200x400?text=${title}`} alt={title}/> :
                    <img src={poster} alt={title}/>
                }
            </div>
            <div className="movieCard__information">
                <p className='movieCard__title'>{title}</p>
                <p className='movieCard__description'><span>{type}</span><span>{year}</span></p>
            </div>


        </div>
    );
};

export default MovieItem;