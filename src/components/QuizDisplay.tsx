import Question from "../types";

interface Props {
    question: Question;
    total : string
  }

function QuizDisplay(props : Props) {
    
    return (
        <div className="flex justify-center items-center flex-col">
            <h1>Quiz display </h1>
            <img src={props.question.image} alt="Question image" />
            <div className="flex justify-center items-center flex-col">
                <h1>
                    {props.question.text} - {props.question.position} / {props.total}
                </h1>
                <div className="grid grid-cols-1 grid-flow-row  xl:grid-cols-2">
                    {
                        props.question.possibleAnswers.map((answer) => (
                            <div key={answer.id} className="hover:bg-green-500 py-2 px-1">
                                <p>{answer.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default QuizDisplay;