import React from 'react'
import {useParams} from 'react-router-dom' 
import ReactPlayer from "react-player"


function MovieDetails({movies}) {

    const {id} =useParams()
    const movie = movies.find(el=>el.id==id) 
    return (
        <div>
            <h2 style={{maxWidth:500 ,fontSize:20, marginLeft:450, marginTop:50}}>{movie.description}</h2>
            <ReactPlayer style={{marginLeft:400 ,marginTop:50}} url ={movie.trailer}></ReactPlayer>
            
        </div>
    )
}

export default MovieDetails
