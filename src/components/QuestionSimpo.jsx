import "../styles/components/QuestionSimpo.css"

const QuestionSimpo = ({setQuestion}) => {

    return (
        <div className="question-simpo-container">
            <div onClick={()=>setQuestion("A")} className="question-simpo-a">A</div>
            <div onClick={()=>setQuestion("B")} className="question-simpo-b">B</div>
            <div onClick={()=>setQuestion("C")} className="question-simpo-c">C</div>
            <div onClick={()=>setQuestion("D")} className="question-simpo-d">D</div>
        </div>
    )
}

export default QuestionSimpo