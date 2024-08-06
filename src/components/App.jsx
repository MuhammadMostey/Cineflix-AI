// React
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Material UI
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
//components
import {
  Actors,
  MovieInformation,
  Movies,
  Navbar,
  Profile,
  mainRoutes,
  RoutesNew,
} from "./";
// custom styles
import { customStyles } from "./styles.js";

const App = () => {
  const theme = useTheme();
  const classes = customStyles(theme);

  return (
    <Box sx={classes.root}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Box component="main" sx={classes.content}>
          <Box sx={classes.toolbar} />
          <RoutesNew />
        </Box>
      </Router>
    </Box>
  );
};

export default App;
