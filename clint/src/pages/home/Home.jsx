import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/navBar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjA3MDQ1OWRiZTkxZDExODUyM2Q4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjI4MTUzNCwiZXhwIjoxNzAyNzEzNTM0fQ.3b72OzAdFpAVOodNJER_NJA5GfL5exoOf68xhxHk86I",
            },
          }
        );
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre } />
      {lists.map((list) => (
        <List  list={list} />
      ))}
    </div>
  );
};

export default Home;
