import React, { useState, useEffect } from "react";

import Popup from './Popup';
import axios from "./axios";
import requests from "./requests";

import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false)


//Fetch data from one source and set random movie on screen
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

// Prevent scrool when Modal is open
  useEffect(()=> {
    popup? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  })

// Check if popup state is true 
  function togglePopup() {
    setPopup(!popup)
  }
//Shorten the description of the serial/movie
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
          <a href="https://www.netflix.com/"><button className="banner-first_button"><i className='play icon'/>Play</button></a>
          <button className="banner-second_button" onClick={togglePopup} ><i className='info circle icon' />More info</button>
          {popup? <Popup description={movie?.overview} img_src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} close={togglePopup} title={movie?.title || movie?.original_name || movie?.name} popularity={Math.floor(movie?.popularity)} /> : null}
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
