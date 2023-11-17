import React from "react";
import "./Featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = ({type}) => {
  
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "series"}</span>
          <select name="genre" id="genre">
            <option >Genre</option>
            <option value="adventure"> Adventure</option>
            <option value="comedy"> comedy</option>
            <option value="crime"> Crime</option>
            <option value="fantasy"> Fantasy</option>
            <option value="historical"> Historical</option>
            <option value="horror"> Horror</option>
            <option value="romance"> Romance</option>
            <option value="sci-fi"> Sci-fi</option>
            <option value="thriller"> Thriller</option>
            <option value="western"> Western</option>
            <option value="animation"> Animation</option>
            <option value="drama"> Drama</option>
            <option value="documentary"> Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://png.pngtree.com/background/20210709/original/pngtree-atmosphere-gold-powder-background-black-gold-golden-particle-picture-image_937478.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://cdn.marvel.com/content/1x/moonknight_lob_log_def_03.png"
          alt=""
        />
        <span className="desc">
          Pushpa a labor works for small sum but dreams of living a life of
          king. But he is always let down by his step brothers for being an
          illegitimate child of their father. He gets chance to work in dense
          forest of red sanders where red sanders are smuggled to other
          countries. The labors are always under the scanner of DSP Govindappa
          but Pushpa dares to go against everyone creating
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
