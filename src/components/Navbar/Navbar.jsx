//React
import React from "react";
import { Link } from "react-router-dom";

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

// mui styling
import { useTheme } from "@mui/material/styles";

// Custom styles
import { NavbarStyles } from "./styles";

const Navbar = () => {
  const theme = useTheme();
  const classes = NavbarStyles(theme);

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isAuthenticated = true;
  return (
    <>
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
              <Button
                component={Link}
                to={"/profile/:id"}
                color="inherit"
                sx={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp; </>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </Box>
          {isMobile && "Search ..."}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
