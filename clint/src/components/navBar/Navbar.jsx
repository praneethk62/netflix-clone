import React, { useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />

          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icons" />
          <span>Kids</span>
          <NotificationsIcon className="icons" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4W8R7ibB6ToNcaxa3QQefnfy_BQ84XKk4w&usqp=CAU"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icons" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
