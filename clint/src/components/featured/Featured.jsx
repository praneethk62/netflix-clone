import React, { useEffect, useState } from "react";
import "./Featured.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "axios";

const Featured = ({ type }) => {
  const [contant, setContant] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjA3MDQ1OWRiZTkxZDExODUyM2Q4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjI4MTUzNCwiZXhwIjoxNzAyNzEzNTM0fQ.3b72OzAdFpAVOodNJER_NJA5GfL5exoOf68xhxHk86I",
          },
        });
        setContant(res.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getRandomContent()
  },[type])
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
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
        src={contant.img}
        alt=""
      />
      <div className="info">
        <img
          src={contant.imgTitle}
          alt=""
        />
        <span className="desc">
       {contant.desc}
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
