import { useState, useEffect } from 'react';
import Question from '../types';
import QuizApiService from '../services/QuizApiService';


function QuestionForm (props : {questionId : number | null}){
    const [question, setQuestion] = useState<Question|null>(null);

    useEffect(() => {
        var cleanQuestion:Question;
        if (props.questionId === null) {
            cleanQuestion = {
                position : 0,
                text : '',
                title : '',
                image : '',
                possibleAnswers : [],
            }
            setQuestion(cleanQuestion);
        }
        else {
            const getData = async () => {
                const response = await QuizApiService.getQuestionByPosition(props.questionId!.toString());
                if (response.status === 200) {
                    cleanQuestion = response.data;
                    setQuestion(cleanQuestion);
                }
            }
            getData();
        }
        
    }, []);

    const handleChange = (event:any,pos:number) => {
        for (let i =0; i < question!.possibleAnswers.length; i++) {
            if (i === pos - 1) continue;
            question!.possibleAnswers[i].isCorrect = false;
            console.log(i,question!.possibleAnswers[i]);
        }
        question!.possibleAnswers[pos - 1].isCorrect = true;
        setQuestion(question);
        console.log(pos);
        console.log("Checkbox checked or not ? ",event.target.checked);
    };

    if (question){
        return (
            <div className='flex justify-center items-center flex-col'>
                <form action="">
                    <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                        Thème de la question
                    </label>
                    <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                        <input value={question.title} onChange={(event) =>{setQuestion({...question, title: event.target.value})}} className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Thème" aria-label="Full name" required />
                    </div>
                    
                    <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                        Intitulé de la question
                    </label>
                    <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                        <input value={question.text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Intitulé" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                    </div>

                    <div>
                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Position dans le quiz
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input value={question.position} onChange={(event) =>{setQuestion({...question, position: parseInt(event.target.value)})}} placeholder="Position" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="number" aria-label="Full name" required />
                        </div>

                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Réponse 1
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input onChange={() => {handleChange(window.event,1)} } type="radio" checked={question!.possibleAnswers[0].isCorrect} name="correctAnswer" value="" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[0].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>

                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Réponse 2
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input onChange={() => {console.log("clicked ");handleChange(window.event,2)} } type="radio" checked={question!.possibleAnswers[1].isCorrect} name="correctAnswer" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[1].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>

                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Réponse 3
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input onChange={() => {handleChange(window.event, 3)}} type="radio" checked={question!.possibleAnswers[2].isCorrect} name="correctAnswer" value="" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[2].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>

                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Réponse 4
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input onChange={() => {handleChange(window.event, 4)}} type="radio" checked={question!.possibleAnswers[3].isCorrect} name="correctAnswer" value="" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[3].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>



                    </div>


                </form>
                <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {console.log(question)}}>
                    Test formulaire
                </button>
            </div>
        )
    }
    else {
        return (
            <div>Loading... </div>
        )
    }
}

export default QuestionForm;