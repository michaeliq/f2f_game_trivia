import { useEffect, useState } from "react"
import "../styles/components/PanelOptions.css"
import { useSearchParams } from "react-router-dom"
import Swal from "sweetalert2"
const PanelOptions = () => {

    const [params, setParams] = useSearchParams()
    const [questionTitle, setQuestionTitle] = useState("")
    const [questionId, setQuestionId] = useState(undefined)

    const sendVote = async (vote) => {
        try {
            const answerQuery = await fetch("https://entorno.advancesas.co:4500/api/question-simpo", {
                method: "PUT",
                body: JSON.stringify({
                    vote,
                    id: questionId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (answerQuery.status === 200) {
                const answerData = await answerQuery.json()
                console.log(answerData)
                Swal.fire({
                    title: "Gracias por su voto",
                    icon: "success"
                })
            }else{
                Swal.fire({
                    title: "No se pudo grabar su voto",
                    icon: "error"
                })
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setQuestionTitle(params.get("question"))
        setQuestionId(params.get("id"))
    }, [params])

    return (
        <div className="panel-options-customer">
            <div className="panel-options-customer-question">
                {questionTitle}
            </div>
            <div className="panel-options-container-customer">
                <div onClick={() => sendVote("A")} className="option-customer">A</div>
                <div onClick={() => sendVote("B")} className="option-customer">B</div>
                <div onClick={() => sendVote("C")} className="option-customer">C</div>
                <div onClick={() => sendVote("D")} className="option-customer">D</div>
            </div>
        </div>
    )
}

export default PanelOptions