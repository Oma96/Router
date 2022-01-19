import React from 'react'
import {useParams} from 'react-router-dom' 

function MovieDetails({movie}) {

    // {movie.id} = useParams() 
    return (
        <div>
            <h2>{movie.description}</h2>
            <iframe src={movie.trailer}></iframe>
            
        </div>
    )
}

export default MovieDetails
