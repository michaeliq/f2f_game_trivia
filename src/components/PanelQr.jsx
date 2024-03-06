import "../styles/components/PanelQr.css"
import module_panel from "../resources/modulo_panel.png"
import QuestionGame from "./QuestionGame"
import QrCode from "./GenerateQrCode"
import { useEffect, useState } from "react"

const PanelQr = ({ question,id, visible, setDisplayQr }) => {

    const [urlQuestion,setURL] = useState("")

    function encodeQueryData(data) {
        const ret = [];
        for (let d in data)
          ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    }

    

    useEffect(() => {
        const data = encodeQueryData({question,id})
        setURL(data)
    }, [visible])

    return (
        <>
            <div className={visible ? "panel-game-qr visible" : "panel-game-qr"}>
                <img src={module_panel} className="module-panel-qr" alt="Imagen del Panel" />
                <QrCode text={"https://simposio-alcon.agenciahat.com/present-options?"+urlQuestion} />
                <QuestionGame text={"ESCANEA EL CÓDIGO"} />
                <div onClick={() => setDisplayQr(prev => !prev)} className="display-qr-box-close">
                    Cerrar QR
                </div>
            </div>

        </>
    )
}

export default PanelQr