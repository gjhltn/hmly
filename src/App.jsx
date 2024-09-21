import { useState, useEffect } from 'react'
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
import { SimulationContext } from './SimulationContext.js';
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/boost",
    element: <Boost />,
  },
]); */


const router = createBrowserRouter([
  {
    path: "/hmly/",
    element: <Home />,
  },
  {
    path: "/hmly/boost",
    element: <Boost />,
  },
]);

function App() {
  const webWorker = new WebWorker(worker);
  const [simulationState, setSimulationState] = useState({
    heatingOn: false
  }
  )

  useEffect(() => {
    webWorker.postMessage({eventType:"init"});
  }, []);

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
    <SimulationMonitor data={simulationState}/>

        <SimulationContext.Provider value={{
temperature: 18.2,
isOn:simulationState.heatingOn,
turnOn: turnOn,
turnOff: turnOff


        }}>
    <div className="box">
      
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
        <Overlay />
        
    </div>
    </SimulationContext.Provider>
    </>
  )
}

export default App
