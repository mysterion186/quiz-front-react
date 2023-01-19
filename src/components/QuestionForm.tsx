import { useState, useEffect } from 'react';
import Question from '../types';
import QuizApiService from '../services/QuizApiService';


function QuestionForm (props : {questionId : number | null}){
    const [question, setQuestion] = useState<Question|null>(null);
    const [listAnswer, setListAnswer] = useState<boolean[]>([false,false,false,false]);

    const [selected, setSelected] = useState<number>(0);


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
                    const Answers = [];
                    for (let i = 0; i < cleanQuestion.possibleAnswers.length; i++) {
                        if (cleanQuestion.possibleAnswers[i].isCorrect){
                            Answers.push(true);
                            setSelected(i);
                        }
                        else Answers.push(false);
                    }
                    console.log(Answers);
                    setListAnswer(Answers);
                }
            }
            getData();
        }
        
    }, []);

    const handleChange = (event:any) => {
        const rawSelected = parseInt(event.target.value);
        setSelected(rawSelected);
        for (let i = 0; i < question!.possibleAnswers.length; i++) {
            if (i === rawSelected) question!.possibleAnswers[rawSelected].isCorrect = true;
            else {
                question!.possibleAnswers[i].isCorrect = false;
            }
        }
        setQuestion(question);
        console.log(question!.possibleAnswers);
    }

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
                            <input onChange={() => {handleChange(window.event)} } type="radio" checked={selected ===0} name="correctAnswer" value="0" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[0].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>

                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Réponse 2
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input onChange={() => {handleChange(window.event)} } type="radio" checked={selected === 1} name="correctAnswer" value="1" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[1].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>

                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Réponse 3
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input onChange={() => {handleChange(window.event)}} type="radio" checked={selected === 2} name="correctAnswer" value="2" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[2].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>

                        <label className="mt-5 block uppercase tracking-wide text-white-700 text-xs font-bold mb-2">
                            Réponse 4
                        </label>
                        <div className={`flex items-center border-b py-2 px-2 ${false?"border-red-500":"border-teal-500"} `}>
                            <input onChange={() => {handleChange(window.event)}} type="radio" checked={selected === 3} name="correctAnswer" value="3" id="flexCheckDefault" />
                            <input value={question.possibleAnswers[3].text} onChange={(event) =>{setQuestion({...question, text: event.target.value})}} placeholder="Réponse 1" className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" aria-label="Full name" required />
                        </div>



                    </div>


                </form>
                <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => {console.log(question); console.log(listAnswer)}}>
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