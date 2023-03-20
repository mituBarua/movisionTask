import React from "react";
import { BsStarFill } from "react-icons/bs";
export default function MovieInfo({ moviedetails }) {
  console.log(moviedetails);
  const {
    original_title,
    popularity,
    overview,
    release_date,
    status,
    poster_path,
    vote_average,
  } = moviedetails;
  return (
    <div className="bg">
      <div className="container">
        <div className="row  pt-5">
          <div className="col-md-6 details-img">
            <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt="movie-poster" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="title">
              <h2>{original_title}</h2>
              <span>
                Rating {vote_average} <BsStarFill className="icon" />
              </span>
            </div>
            <div className="release-details">
              <p>{release_date}</p>
              <p>{popularity}</p>
              <p>{status}</p>
            </div>
            <div className="overview">
              <h5>Overview</h5>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
