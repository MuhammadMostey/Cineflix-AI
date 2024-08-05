// React
import React from "react";
import ReactDOM from "react-dom/client";

// import Routing components from "react-router-dom";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import mainRoutes from "./components/Routes/Routes";

// components page
import App from "./components/App";

// material UI
import { useTheme, ThemeProvider } from "@mui/material/styles";

// creating a root element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering App in the root div wrapped by RouterProvider.
root.render(<App />);
