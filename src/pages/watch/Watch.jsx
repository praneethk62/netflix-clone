import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Trailer from "../../assets/spiderman trailer.mp4";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video className="video" autoPlay progress controls src={Trailer} />
    </div>
  );
};

export default Watch;
