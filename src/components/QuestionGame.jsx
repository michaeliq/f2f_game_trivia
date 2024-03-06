import module_question from "../resources/modulo_pregunta.png"
import "../styles/components/QuestionGame.css"

const QuestionGame = ({text}) => {
    return (
        <div className="question-game">
            <img src={module_question} className="module-question" alt="Imagen de la pregunta" />
            <p>{text}</p>
        </div>
    )
}

export default QuestionGame