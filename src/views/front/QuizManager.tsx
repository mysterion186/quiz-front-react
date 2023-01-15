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
    
    const loadQuestionByPosition = async () => {
        console.log("dans load ");
        if (currentPos <= parseInt(numberQuestionTotal)) {
            const response = await QuizApiService.getQuestionByPosition(currentPos.toString());
            console.log(response);
            if (response.status === 200) {
                setQuestion(response.data);
                console.log(question);
            }
            else {
                console.log("La question demandée n'existe pas, passons à la question suivante ",response);
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
        console.log("Depuis useEffect ",question);
    }, []);
    console.log("En dehors  ",question);
    if (question) {
        return (
            <div className="flex justify-center items-center flex-col">
                Welcome to the Quiz 
                <QuizDisplay question={question as Question} total={numberQuestionTotal}/>
            </div>
        )
      } else {
        return <p>Loading...</p>;
      }
    
}

export default QuizManager;