import  { useState , useEffect } from 'react'
import styles from './Overlay.module.css'

export const Overlay = () => {
    var [date,setDate] = useState(new Date());


    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
return <div className={styles.overlay}>
    <div>{date.toLocaleTimeString('en-UK', { weekday:'long', hour: 'numeric', minute: 'numeric', hour12: true })}</div>
    <div className={styles.arrows}>⇄</div>
</div>

}