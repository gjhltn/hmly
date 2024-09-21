import { useState } from 'react'
import './App.css'
import { Home } from './Home'
import { Boost } from './Boost'
import { Overlay } from './Overlay'
import { SimulationMonitor } from './SimulationMonitor'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/boost",
    element: <Boost />,
  },
]);

function App() {
  return (
    <>
    <SimulationMonitor />
    <div class="box">
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
        <Overlay />
    </div>
    </>
  )
}

export default App
