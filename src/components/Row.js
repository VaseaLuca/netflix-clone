import React, { useState, useEffect } from "react";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./Row.css";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {


  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

//The settings for Youtube Player

  const opts = {
    width: "100%",
    height: "390px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
//Fetch data from tmdb 

  useEffect(() => {
    async function fetchData() {
      const moviesRequest = await axios.get(fetchUrl);
      setMovies(moviesRequest.data.results);
    }
    fetchData();
  }, [fetchUrl]);

//Onclick display trailer and swich off the trailer
    const handleClick = (poster) => {
      if(trailerUrl){
        setTrailerUrl('');
      } else {
        movieTrailer(poster?.name || poster?.original_name || poster?.title || '')
          .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search)
            const get = urlParams.get("v");
              setTrailerUrl(get)
        }).catch(err => console.log(err)
        )
      }
    }



  return (
    <div className="row">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className={`row-posters`}>
        {movies.map((poster) => (
          <img
            onClick={() => handleClick(poster)}
            className={`row-poster ${isLargeRow && "row-posterLarge"} `}
            key={poster.id}
            src={`${base_url}${
              isLargeRow ? poster.poster_path : poster.backdrop_path
            }`}
            alt={poster.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube className="row-youtube" opts={opts} videoId={trailerUrl} />
      }
    </div>
  );
}

export default Row;
