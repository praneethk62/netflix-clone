import React, { useEffect, useState } from "react";
import "./listitems.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import axios from "axios";
import { Link } from "react-router-dom";
import vikings from "../../assets/vikings.mp4"


const ListItems = ({ index,item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
 
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjA3MDQ1OWRiZTkxZDExODUyM2Q4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjcxNTY2MiwiZXhwIjoxNzAzMTQ3NjYyfQ.89EE96EyxLV3F6IvDizolhmBjHD0_VYrmburoKpyMD8",
          },
        });
        setMovie(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getMovie()
  },[item])

  return (
    <Link to={{pathname:"/watch",movie:movie}} >
      <div
        className="listitem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={vikings} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year} </span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItems;
