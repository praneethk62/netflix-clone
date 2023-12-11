import Home from "./pages/home/Home";
import "./App.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";

import {  Route, Routes,Navigate } from "react-router-dom";
function App() {
  const user = true;
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route  path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
