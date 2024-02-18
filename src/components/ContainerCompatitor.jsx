import module_compatitor_bottom from "../resources/modulo_competidor_abajo.png"
import module_compatitor_top from "../resources/modulo_competidor_arriba.png"
import module_point_right from "../resources/modulo_puntos_der.png"
import module_point_left from "../resources/modulo_puntos_izq.png"
import "../styles/components/ContainerCompatitorGame.css"

const ContainerCompatitorGame = () => {
    return (
        <div className="container-compatitor-game">
            <img src={module_compatitor_top} className="module-compatitor group-a" alt="Competidor 1 equipo A" />
            <img src={module_compatitor_top} className="module-compatitor group-b" alt="Competidor 1 equipo B" />
            <img src={module_point_left} className="module-point-left" alt="Puntos equipo A" />
            <img src={module_compatitor_bottom} className="module-compatitor group-a" alt="Competidor2 equipo A" />
            <img src={module_compatitor_bottom} className="module-compatitor group-b" alt="Competidor 2 equipo B" />
            <img src={module_point_right} className="module-point-right" alt="Puntos equipo B" />

        </div>
    )
}

export default ContainerCompatitorGame