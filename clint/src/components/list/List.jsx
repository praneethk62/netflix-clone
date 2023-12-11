import React, { useState } from "react";
import "./list.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItems from "../listItems/ListItems";
import { useRef } from "react";


const List = ({list}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    const distance = 230;
    const currentTransform =
      listRef.current.style.transform || "translateX(0px)";
    const currentX = parseInt(currentTransform.match(/-?\d+/)[0]);

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${currentX + distance}px)`;
    } else if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${currentX - distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">{ list.title}</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item,i) => 
            
          <ListItems index={i} item={item} />
          )}
     
        </div>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
