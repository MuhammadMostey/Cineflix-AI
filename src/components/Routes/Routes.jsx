// components
import Actors from "../Actors/Actors";
import MovieInformation from "../MovieInformation/MovieInformation";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";

// react-router-dom
import { createBrowserRouter } from "react-router-dom";

const mainRoutes = createBrowserRouter([
  { path: "/", element: <Movies /> },
  { path: "/movie/:id", element: <MovieInformation /> },
  { path: "/actors/:id", element: <Actors /> },
  { path: "/profile/:id", element: <Profile /> },
]);

export default mainRoutes;
