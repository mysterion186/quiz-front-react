import { useState, useEffect } from "react";
import Question from '../../types';
import ParticipationStorage from "../../services/ParticipationStorage";
import QuizApiService from "../../services/QuizApiService";
import QuizDisplay from "../../components/QuizDisplay";

type props = {
    question : Question, 
    total : string, 
    setParentAnswer : any
}
function QuizManager(){
    const [userAnswer, setUserAnswer] = useState<number[]>([]);
    const [question, setQuestion] = useState<Question | null>(null);
    const [currentPos, setCurrentPos] = useState<number>(1);
    const numberQuestionTotal:string = ParticipationStorage.getTotal() as string;
    const [answerSize, setAnswerSize] = useState<number>(userAnswer.length);
    
    const loadQuestionByPosition = async () => {
        if (currentPos <= parseInt(numberQuestionTotal)) {
            const response = await QuizApiService.getQuestionByPosition(currentPos.toString());
            if (response.status === 200) {
                setQuestion(response.data);
                // console.log(question);
            }
            else {
                // console.log("La question demandée n'existe pas, passons à la question suivante ",response);
                setCurrentPos(currentPos + 1);
            }
        }
        else{
            console.log("Faut mettre fin au question mec !");
        }
    }

    useEffect(() => {
        const temp = async () => {
            await loadQuestionByPosition();
        }
        temp();
        setCurrentPos( currentPos + 1 );
        console.log("useEffect numéro 2, doit s'afficher s'il y a un changement dans userAnswers");
    }, [userAnswer.length]);

    if (question) {
        return (
            <div className="flex justify-center items-center flex-col">
                Welcome to the Quiz 
                <QuizDisplay 
                    question={question as Question} 
                    total={numberQuestionTotal}
                    setParentAnswer={setUserAnswer}
                    userAnswer={userAnswer}
                />
                <button onClick={() => {console.log("depuis quiz manager ", userAnswer);}}>Display userAnswers</button>
            </div>
        )
      } else {
        return <p>Loading...</p>;
      }
    
}

export default QuizManager;