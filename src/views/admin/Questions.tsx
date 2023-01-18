import {useState, useEffect} from "react";
import Question from "../../types";
import QuizApiService from "../../services/QuizApiService";


function Questions () {
    const [questions, setQuestions] = useState<Question[] | null>(null);

    useEffect(() => {
        const getData = async () => {
            const response = await QuizApiService.getAllQuestions();
            setQuestions(response.data);
        };
        getData();
    }, []);

    if (questions){
        return (
            <div className="flex justify-center items-center flex-col">
                <table className="table-auto border-separate mt-16 max-h-16">
                    <thead>
                        <tr className='items-center '>
                            <th className="px-12 border-b-2 hidden lg:block">Position</th>
                            <th className="px-12 border-b-2 ">Questions</th>
                        </tr>
                    </thead>
                    <tbody className="justify-center items-center overflow-y-auto" style={{height: "5px",width: "5px"}}>
                        {questions!.map((item, index) => (
                            <tr key={index} className="hover:bg-green-400 items-center">
                                <td className="px-12 border-b-2 text-center hidden lg:block">{item.position}</td>
                                <td className="px-12 border-b-2 text-center">{item.text}</td>
                            </tr>
                        ))}
    
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return(
            <div>Loading... </div>
        )
    }
}

export default Questions;