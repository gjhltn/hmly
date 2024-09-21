import styles from './Home.module.css'

export const Home = () =><div className={styles.home}>
    

    <div className={styles.wrapper}>
  <a className={styles.a}>
  <span className={styles.title}>Heating</span>
  <span className={styles.status}>On</span>
  </a>
  <div className={styles.b}>
    <div className={styles.current}>
        <h1>Current Temperature</h1>
        <h2>19.2&deg;</h2>
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
</div>