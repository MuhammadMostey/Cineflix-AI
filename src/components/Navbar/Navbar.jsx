//React
import React from "react";
import { Link, BrowserRouter, Routes, Route, Router } from "react-router-dom";

// Custom styles
// import { NavbarStyles } from "./styles";

// mui Navbar Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Avatar,
  Drawer,
  useMediaQuery,
  Box,
} from "@mui/material";

// mui Icons
import { DarkMode, LightMode, Menu, AccountCircle } from "@mui/icons-material";
import { useTheme, createTheme } from "@mui/material/styles";

// delete
const theme = useTheme();
const NavbarStyles = createTheme({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  linkButton: {},
});

const Navbar = () => {
  const classes = NavbarStyles();
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isAuthenticated = false;
  return (
    <>
      {console.log(NavbarStyles)}
      <AppBar position="fixed">
        <Toolbar sx={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
              sx={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
          </IconButton>
          {!isMobile && "Search ..."}
          <Box element="div">
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              /* <Button component={Link} to="/profile/:id">
                Go to About Page
              </Button> */
              <Button color="inherit" onClick={() => {}}>
                <Link to="/profile/:id">
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    alt="Profile Page Button"
                  ></Avatar>
                </Link>
              </Button>

              /* <BrowserRouter>
                <Button>go</Button>
                <Routes>
                  <Route path="/profile/:id" />
                </Routes>
              </BrowserRouter> */
              /* <Router>
                <Button component={Link} to="/profile">
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar style={{ width: 30, height: 30 }} alt="Profile" />
                </Button>
              </Router> */

              /* <BrowserRouter>
                <Routes>
                  <Route>
                    <Button
                      color="inherit"
                      component={Link}
                      to="/profile/:id"
                      onClick={() => {}}
                      sx={classes.linkButton}
                    >
                      {!isMobile && <>My Movies &nbsp;</>}
                      <Avatar style={{ width: 30, height: 30 }} alt="Profile" />
                    </Button>
                  </Route>
                </Routes>
              </BrowserRouter> */
            )}
          </Box>
          {isMobile && "Search ..."}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
