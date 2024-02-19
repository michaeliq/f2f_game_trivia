import "../styles/components/CompatitorGame.css"
import module_compatitor_bottom from "../resources/modulo_competidor_abajo.png"
import module_compatitor_top from "../resources/modulo_competidor_arriba.png"
import { useEffect, useState } from "react"

const CompatitorGame = ({children,axisX,axisY,textAlt}) => {

    const [configImage, setConfig] = useState({})

    const validateSide = () => {
        if(axisX === "left"){
            setConfig(prev => {
                return {...prev,classN:"module-compatitor group-a"}
            })
        }else if(axisX === "right"){
            setConfig(prev => {
                return {...prev,classN:"module-compatitor group-b"}
            })
        }
        if(axisY === "Top"){
            setConfig(prev => {
                return {...prev,src:module_compatitor_top}
            })
        }else if(axisY === "Bottom"){
            setConfig(prev => {
                return {...prev,src:module_compatitor_bottom}
            })
        }
    }

    useEffect(()=>{
        validateSide()
    },[])

    return(
        <div className={`compatitor-box ${axisX === "right" ? "left":"right"}`}  >
            <img src={configImage?.src} className={configImage?.classN} alt={textAlt} />
            {children}
        </div>
    )
}

export default CompatitorGame