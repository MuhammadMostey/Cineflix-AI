// React
import React from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Material UI
import { CssBaseline } from "@mui/material";
//components
import {
  Actors,
  MovieInformation,
  Movies,
  Navbar,
  Profile,
  mainRoutes,
} from "./";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <RouterProvider router={mainRoutes} />
      </main>
    </div>
  );
};

export default App;
