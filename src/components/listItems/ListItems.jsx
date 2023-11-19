import React, { useState } from "react";
import "./listitems.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Trailer from "../../assets/spiderman trailer.mp4"

const ListItems = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
 

  return (
    <div
      className="listitem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://i.redd.it/r3spodxd3wo71.png" alt="" />
      {isHovered && (
        <>
          <video src={Trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>2h 28m</span>
              <span className="limit">0</span>
              <span>17 Dec 2021</span>
            </div>
            <div className="desc">
              Peter Parker's secret identity is revealed to the entire world.
              Desperate for help, Peter turns to Doctor Strange to make the
              world forget that he is Spider-Man.
            </div>
            <div className="genre">Action/Adventure</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItems;
