import React, { useState } from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'


function MovieList({ movies,rate }) {
    const [input, setInput] = useState('')
    return (
        <div>
             <Filter input={input} setInput={setInput} />
            <div className='movies'>

                {movies
                .filter(el => el.title.toUpperCase().includes(input.toUpperCase())  && el.rate >= rate)
                .map((el,key) => <MovieCard className='card' movie={el} key={el.id} />)}
                </div>

               
            




        </div>
    )
}

export default MovieList
