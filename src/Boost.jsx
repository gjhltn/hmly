import { useContext } from 'react';
import { SimulationContext } from './SimulationContext.js';


export const Boost = () => {
    const simulation = useContext(SimulationContext);
    return <div style={{background: "rgb(198, 199, 245)", paddingTop:"4rem"}}>
        (Boost screen)
        <div style={{marginTop:"2rem"}}>
            {
                simulation.isOn ?<>
<h2>Heating: ON</h2>
<button onClick={()=>simulation.turnOff()}>turn boiler off</button>
</>
        :<><h2>Heating: OFF</h2>
        <button onClick={()=>simulation.turnOn()}>turn boiler on</button>
            </>}
        </div>
    </div>
}