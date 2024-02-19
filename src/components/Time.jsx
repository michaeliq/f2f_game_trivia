import timeC from "../resources/modulo_tiempo.png"
import "../styles/components/Time.css"
const Time = () => {

    return(
        <div className="time-box">
            <img src={timeC} className="time-module" alt="Imagen caja de cuenta regresiva"/>
            <p>00:30</p>
        </div>
    )
}

export default Time