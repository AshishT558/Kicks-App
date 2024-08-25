import App from './App.jsx'
import './index.css'

import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ShoeList from "./components/ShoeList"
import Recommendation from "./components/Recommendation"
import LandingPage from './components/LandingPage.jsx';

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
    path: "/all_shoes",
    element: <App />,
    children: [
      {
        path: "/all_shoes",
        element: <ShoeList />,
      },
    ],
  },
  {
    path: "/get_recommendation",
    element: <App />,
    children: [
      {
        path: "/get_recommendation",
        element: <Recommendation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

