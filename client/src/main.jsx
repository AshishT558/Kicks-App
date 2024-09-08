import App from './App.jsx'
import './index.css'

import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AboutPage from "./pages/AboutPage"
import GalleryPage from "./pages/GalleryPage"
import ExplorePage from "./pages/ExplorePage"
import LandingPage from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/about",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/gallery",
    element: <App />,
    children: [
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
  {
    path: "/explore",
    element: <App />,
    children: [
      {
        path: "/explore",
        element: <ExplorePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

