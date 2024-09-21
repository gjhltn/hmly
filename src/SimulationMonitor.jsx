import styles from './SimulationMonitor.module.css'

export const SimulationMonitor = ({data}) =><div className={styles.sm}>{data && JSON.stringify(data)}</div>