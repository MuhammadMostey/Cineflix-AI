// components
import Actors from "../Actors/Actors";
import MovieInformation from "../MovieInformation/MovieInformation";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";

// react-router-dom
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const RoutesNew = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route exact path="/movie/:id" element={<MovieInformation />} />
        <Route exact path="/actors/:id" element={<Actors />} />
        <Route exact path="/profile/:id" element={<Profile />} />
      </Routes>
    </>
  );
};

export default RoutesNew;
