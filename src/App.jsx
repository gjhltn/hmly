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
import worker from './workers/simulation.js';
import WebWorker from './WebWorker';

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
  const webWorker = new WebWorker(worker);

  const [simulationState, setSimulationState] = useState()

  const turnOn = () => {
    webWorker.postMessage({eventType:"on"});
  }

  const turnOff = () => {
    webWorker.postMessage({eventType:"off"});
  }

  webWorker.addEventListener('message', (e) => {
    setSimulationState(e.data)
});

  return (
    <>
    <button onClick={()=>turnOn()}>on</button>
    <button onClick={()=>turnOff()}>off</button>
    <SimulationMonitor data={simulationState}/>
    <div className="box">
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
        <Overlay />
    </div>
    </>
  )
}

export default App
