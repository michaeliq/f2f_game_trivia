import "../styles/components/PanelQuestionGame.css"
import ContainerOptionsGame from "./ContainerOptionsGame"
import PanelGame from "./PanelGame"
import QuestionGame from "./QuestionGame"
import { useEffect, useState } from "react"
import QuestionSimpo from "./QuestionSimpo"
import PanelQr from "./PanelQr"
import QuestionViewerData from "./QuestionViwerData"
import Time from "./Time"

const PanelQuestionGame = () => {
    const [question,setQuestion] = useState("")
    const [questionId,setQuestionId] = useState("")
    const [questionLater,setQuestionLater] = useState("")
    const [dispalyQr,setDisplayQr] = useState(false)
    const [dispalyQuestionData,setDisplayQuestionData] = useState(false)
    const questionList = [
        {question:"¿A qué porcentaje de pacientes le hacen biometría de ultrasonido en cataratas densas?",id:"65e8818dfcb6cabd8200163a"},
        {question:"¿Qué define realmente a un lente EDoF?",id:"65e8832ffcb6cabd8200163b"},
        {question:"¿A qué porcentaje de pacientes les ofrecen lentes correctores de presbicia?",id:"65e8838efcb6cabd8200163c"},
        {question:"¿A qué porcentaje de pacientes les corrigen el astigmatismo con lentes tóricos?",id:"65e884cafcb6cabd8200163d"},
    ]
    const setQuestionToSimpo = (leter) => {
        switch(leter){
            case "A":
                setQuestionLater(leter)
                setQuestion(questionList[0].question)
                setQuestionId(questionList[0].id)
                break
            case "B":
                setQuestionLater(leter)
                setQuestion(questionList[1].question)
                setQuestionId(questionList[1].id)
                break
            case "C":
                setQuestionLater(leter)
                setQuestion(questionList[2].question)
                setQuestionId(questionList[2].id)
                break
            case "D":
                setQuestionLater(leter)
                setQuestion(questionList[3].question)
                setQuestionId(questionList[3].id)
                break
        }
    }

    useEffect(()=>{
        setQuestionToSimpo("A")
    },[])
    return(
        <div className="panel-question-game">
            <PanelQr question={question} id={questionId} visible={dispalyQr} setDisplayQr={setDisplayQr} />
            {dispalyQuestionData && <QuestionViewerData setDisplayQuestionData={setDisplayQuestionData} question={question}/>}
            <div onClick={()=> setDisplayQuestionData(prev => !prev)} className="display-data-question-box">
                Mostrar Estadísticas de la pregunta {questionLater}
            </div>
            <Time/>
            <QuestionSimpo setQuestion={setQuestionToSimpo} />
            <PanelGame text={question}/>
            <QuestionGame text={"Pregunta " + questionLater}/>
            <div onClick={()=> setDisplayQr(prev => !prev)} className="display-qr-box">
                Mostrar QR
            </div>
            <ContainerOptionsGame question={question}/>
        </div>
    )
}

export default PanelQuestionGame