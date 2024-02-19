import module_point_right from "../resources/modulo_puntos_der.png"
import module_point_left from "../resources/modulo_puntos_izq.png"
import "../styles/components/PointsGame.css"

const PointsGame = () => {

    return (
        <div className="points-box">
            <div className="points-a">
                <img src={module_point_left} className="module-point-left" alt="Puntos equipo A" />
                <p>170</p>
            </div>
            <div className="points-b">
                <img src={module_point_right} className="module-point-right" alt="Puntos equipo B" />
                <p>180</p>
            </div>
        </div>
    )
}

export default PointsGame