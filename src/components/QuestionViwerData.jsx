import { useEffect, useState } from "react"
import QuestionGame from "./QuestionGame"
import module_panel from "../resources/modulo_panel.png"
import "../styles/components/QuestionViewerData.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const bgColores = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 206, 86)',
    'rgb(75, 192, 192)',
]

const QuestionViewerData = ({ question, setDisplayQuestionData }) => {
    const [questionData, setQuestionData] = useState({})
    const [options, setOptions] = useState([])

    const getQuestionData = async () => {
        try {
            if (!question) return
            const questionQuery = await fetch("https://entorno.advancesas.co:4500/api/question-simpo?question=" + question, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const questionData = await questionQuery.json()
            if (!questionData) return
            const { voteA, voteB, voteC, voteD } = questionData
            setQuestionData({
                voteA, voteB, voteC, voteD
            })
            setOptions(questionData.options)
        } catch (error) {
            console.error(error)
        }
    }

    const data = {
        labels: options,
        datasets: [
            {
                label: '# de Votos',
                data: [questionData?.voteA, questionData?.voteB, questionData?.voteC, questionData?.voteD],
                backgroundColor: bgColores,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                color: "rgb(255,255,255)",
                borderWidth: 1,
                options: {

                }
            },
        ],
    };

    const optionsChart = {
        plugins: {
            legend: {
                display: false
            }
        }
    }

    useEffect(() => {
        getQuestionData()
    }, [question])

    return (
        <div className="question-viewer-data-container">
            <img src={module_panel} className="module-panel-viewer-data" alt="Imagen del Panel" />
            <div className="viewer-data-content">
                <div className="legend">
                {options?.map((item, key) => (
                    <p className="legendChart">
                        <div className="legendChart-bg" style={{ background: bgColores[key] }}></div>{item}
                    </p>
                ))}
                </div>
                <Pie data={data} options={optionsChart} />
            </div>
            <QuestionGame text={question} />
            <div onClick={() => setDisplayQuestionData(prev => !prev)} className="display-question-viewer-box-close">
                Cerrar visor
            </div>
        </div>
    )
}

export default QuestionViewerData