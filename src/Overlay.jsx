import  React, { useState , useEffect } from 'react'
import styles from './Overlay.module.css'

export const Overlay = () => {
    var [date,setDate] = useState(new Date());


    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });
return <div className={styles.overlay}>{date.toLocaleTimeString('en-UK', { weekday:'long', hour: 'numeric', minute: 'numeric', hour12: true })}
</div>

}