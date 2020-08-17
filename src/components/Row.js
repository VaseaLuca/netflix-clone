import React, { useState, useEffect } from "react";

import "./Row.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const moviesRequest = await axios.get(fetchUrl);
      setMovies(moviesRequest.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="row-posters">
        {movies.map((poster) => (
          <img
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            key={poster.id}
            src={`${base_url}${
              isLargeRow ? poster.poster_path : poster.backdrop_path
            }`}
            alt={poster.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
