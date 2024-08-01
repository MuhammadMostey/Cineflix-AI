// React
import React from "react";
import ReactDOM from "react-dom";

// import Routing components from "react-router-dom";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// components page
import App from "./components/App";

// creating a root element using ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering App in the root div wrapped by BrowserRouter.
root.render(<App />);

// Test
const mainRouter = createBrowserRouter([
  { path: "/", element: <h1>Cineflix AI - Your Cinema at Home</h1> },
  { path: "/movies", element: <h1>Movies</h1> },
]);
