import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;

  // Check if movie is undefined before accessing its properties
  if (!movie) {
    return (
      <div className="watch">
        <p>Error: Movie not found.</p>
      </div>
    );
  }

  return (
  <Link to="/">
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video className="video" autoPlay controls src={movie.video} />
      </div>
      </Link>
  );
};

export default Watch;
