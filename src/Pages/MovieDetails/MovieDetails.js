import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieInfo from './MovieInfo';
export default function MovieDetails() {
    const { id } = useParams();
    const [moviedetails, setMovieDetails] = useState({});
   
    useEffect(() => {
        axios
            .request(`${process.env.REACT_APP_MOVIE_DETAILS}/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(function (response) {

                setMovieDetails(response.data);

            })
            .catch(function (error) {
                console.error(error);
            });
    }, [id]);

    return (
        <div>
            
            <MovieInfo moviedetails={moviedetails}/>
        </div>
    )
}
