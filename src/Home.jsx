import styles from './Home.module.css'
import { Outlet, Link } from "react-router-dom";
import { useContext } from 'react';
import { SimulationContext } from './SimulationContext.js';

export const Home = () => {
    const simulation = useContext(SimulationContext);
return(
<div className={styles.home}>
    

    <div className={styles.wrapper}>
    <Link className={styles.a} to={`boost`}>
  <span className={styles.title}>Heating</span>
  <span className={styles.status}>{simulation.isOn?"on":"off"}</span>
  </Link>
  <div className={styles.b}>
    <div className={styles.current}>
        <h1>Current Temperature</h1>
        <h2>{simulation.temperature}&deg;</h2>
    </div>
  <div className={styles.target}><h1>Target Temperature</h1>
  <h2>20.0&deg;</h2>
  <h3>Set by a schedule</h3>
  </div>
  
  </div>
  <a className={styles.c}>
    <span className={styles.title}>Hot Water</span>
    <span className={styles.status}>On</span>
  </a>
</div>
</div>)}