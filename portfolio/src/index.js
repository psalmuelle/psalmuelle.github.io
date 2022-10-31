import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import Err from "./pages/error"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Err/>
  }, 
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
 
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


