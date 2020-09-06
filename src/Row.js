import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import requests from './requests';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    //useState: state is the temporary memory or variable in react
    const [movies, setMovies] = useState([]);

    //useEffect: A snippet of code which runs based on a specifi condition/variable
    useEffect(() => {
        //if [], run once when the row loads and donot run again
        //if [movies], runs when the movies changes
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            //console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    //console.log(movies); 
    console.table(movies);

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {/* container -> several posters */}
                {movies.map((movie) => (
                    <img
                        className="row__poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;