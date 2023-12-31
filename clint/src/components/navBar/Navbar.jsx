import React, { useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Link} from "react-router-dom"

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
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainlinks">Series</span>
          </Link>
          <Link to="/movies"  className="link">
            <span className="navbarmainlinks">Movies</span>
          </Link>
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
              <Link to="/register" className="link">
                <span>Register</span>{" "}
              </Link>
              <Link to="/login" className="link">
                <span>Login</span>{" "}
              </Link>

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
