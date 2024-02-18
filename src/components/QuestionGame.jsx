import module_question from "../resources/modulo_pregunta.png"
import "../styles/components/QuestionGame.css"

const QuestionGame = () => {
    return (
        <div className="question-game">
            <img src={module_question} className="module-question" alt="Imagen de la pregunta" />
            <p>Pregunta #1</p>
        </div>
    )
}

export default QuestionGame