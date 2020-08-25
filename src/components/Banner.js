import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movieRequest = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        movieRequest.data.results[
          Math.floor(Math.random() * movieRequest.data.results.length)
        ]
      )
  
    }
    fetchData();
  }, []);

  function truncate(string,n) {
    return string?.length > n ? string.substr(0, n-1) + '...' : string
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <div className="banner-title">
          <h1>{movie?.title || movie?.original_name || movie?.name}</h1>
        </div>
        <div className="button-block">
          <button className="banner-first_button"><i className='play icon'/>Play</button>
          <button className="banner-second_button"><i className='info circle icon' />More info</button>
        </div>
        <div className="banner-description">
          <p>{truncate(movie?.overview, 300)}</p>
        </div>
      </div>
      <div className='banner-gradient' />
    </div>
  );
}

export default Banner;
