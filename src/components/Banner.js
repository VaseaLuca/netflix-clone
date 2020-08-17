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
console.log(movie)
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-contents">
        <div className="title">
          <h1>{movie?.title || movie?.original_name || movie?.name}</h1>
        </div>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <div className="description">
          <h1>{movie?.overview}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
