import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../request";
function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchdata();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  console.log(movie);
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        objectFit:"contain"
        
      }}
      className="Banner"
    >
      <div className="Banner__content">
        <h1 className="Banner__title">{movie?.orignal_name || movie?.name}</h1>
        <div className="Banner__buttons">
          <button className="Banner__button">Play</button>
          <button className="Banner__button">My List</button>
        </div>
        <h1 className="Banner__desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="Banner__fade"></div>
    </div>
  );
}

export default Banner;
