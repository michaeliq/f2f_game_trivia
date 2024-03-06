import { useEffect, useState } from "react"
import timeC from "../resources/modulo_tiempo.png"
import "../styles/components/Time.css"

const Time = () => {
    const [time,setTime] = useState(0)

    const ResetTime = () => {
        setTime(30)
    }

    useEffect(()=>{
        let interval
        interval = setInterval(() => {
            if(time > 0){
                setTime(time -1)
            }
        }, 1000);
        return ()=>{
            clearInterval(interval)
        }
    },[time])

    useEffect(()=>{
        if(time === 0){

        }
    },[])

    return(
        <div className="time-box">
            <img src={timeC} className="time-module" alt="Imagen caja de cuenta regresiva"/>
            <p>00:{time > 9 ? time : "0" + time}</p>
            {time === 0 && <p onClick={()=>ResetTime()} className="reset-buttom-time">
                INICIAR
            </p>}
        </div>
    )
}

export default Time