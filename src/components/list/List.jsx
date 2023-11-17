import React from 'react'
import './list.scss'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItems from '../listItems/ListItems';

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosIcon className="sliderArrow left" onclick= {()=>handleClick(left)} />
        <div className="container">
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
        </div>
        <ArrowForwardIosIcon className="sliderArrow right" onclick= {()=>handleClick(right)}  />
      </div>
     
    </div>
  );
}

export default List