import React from "react";
import axios from "axios";

import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Banner />
      <Row
        title="Original titles Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Popular now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
