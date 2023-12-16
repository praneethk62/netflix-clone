import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import vikings from "../../assets/vikings.mp4"

const Watch = () => {
  


  return (
  <Link to="/">
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video className="video" autoPlay controls src={vikings} />
      </div>
      </Link>
  );
};

export default Watch;
