import React from "react";
import "./listitems.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const ListItems = () => {
  return (
    <div className="listitem">
      <img src="https://i.redd.it/r3spodxd3wo71.png" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon />
          <AddIcon />
          <ThumbUpOutlinedIcon />
          <ThumbDownOutlinedIcon />
        </div>
        <div className="itemInfoTop">
          <span>2h 28m</span>
          <span className="limit">0</span>
          <span>17 Dec 2021</span>
        </div>
        <div className="desc">
          Peter Parker's secret identity is revealed to the entire world.
          Desperate for help, Peter turns to Doctor Strange to make the world
          forget that he is Spider-Man. The spell goes horribly wrong and
          shatters the multiverse, bringing in monstrous villains that could
          destroy the world. The Multiverse Unleashed.
        </div>
        <div className="genre">Action/Adventure</div>
      </div>
    </div>
  );
};

export default ListItems;
