// React
import React from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Link,
  Router,
} from "react-router-dom";
// Material UI
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
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
      <ThemeProvider theme={customStyles}>
        <Navbar />
      </ThemeProvider>
      <Box component="main" sx={classes.content}>
        <Box sx={classes.toolbar} />
      </Box>
    </Box>
  );
};

export default App;
