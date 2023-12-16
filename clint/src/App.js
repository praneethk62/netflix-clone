import Home from "./pages/home/Home";
import "./App.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import {  Route, Routes,   } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        }
       
      </Routes>
    </>
  );
}

export default App;
