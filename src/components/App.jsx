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
import { Box } from "@mui/material";
//components
import {
  Actors,
  MovieInformation,
  Movies,
  Navbar,
  Profile,
  mainRoutes,
} from "./";
// custom styles
import { customStyles } from "./styles.js";

const App = () => {
  const classes = customStyles();

  return (
    <Box sx={classes.root}>
      <CssBaseline />
      <Navbar />

      <Box component="main" sx={classes.content}>
        <Box sx={classes.toolbar} />
        <RouterProvider router={mainRoutes} />
      </Box>
    </Box>
  );
};

export default App;
