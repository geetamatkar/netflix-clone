import React, { useState, useEffect } from 'react'
import axios from './axios'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

    //code to run on specific conditions
    //Pull data from api when rows are loading

    useEffect(() => {
        // if [], run once when row loads and don't run again
        //// if [movie], run once when row loads and run again everytime movie changes

        async function fetchData(){
            const request = await axios.get(fetchUrl)
            console.log(request.data.results)
            setMovies(request.data.results)
            return request

        }
        fetchData()

    }, [fetchUrl])

    console.table(movies)


  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>
            {/* Several row posters */}

            {movies.map(movie => (
                <img 
                    key={movie.id}
                    className='row_poster'
                    src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}

        </div>

    </div>
  )
}

export default Row