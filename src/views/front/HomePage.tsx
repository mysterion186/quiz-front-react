import React from 'react';
import QuizApiService from '../../services/QuizApiService';
import { useEffect, useState } from 'react';

function HomePage() {
    const [data, setDate] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const response = await QuizApiService.getQuizInfo();
            setDate(response.data.scores);
            return response;
        }
        fetchData()
    }, [])

    return (
        <div className='flex justify-center flex-col items-center  mt-[50%] lg:mt-[15%]'>
            <h1 className=' text-center lg:text-xl font-bold flex justify-center items-center'>
                Bienvenuz sur notre Quiz sur le thème de la musculation.
            </h1>
            <h1 className=' text-center lg:text-xl font-bold flex justify-center items-center'>
                Aurez-vous la force de répondre à toutes les 
                questions ? 
            </h1>
            <div className=''>    
                <table className="table-auto border-separate mt-16 max-h-16">
                    <thead>
                        <tr className='items-center bg-green-400'>
                            <th className="px-12 border-b-2">Joueurs</th>
                            <th className="px-12 border-b-2 ">Scores</th>
                        </tr>
                    </thead>
                    <tbody className="justify-center items-center overflow-y-auto" style={{height: "5px",width: "5px", color:"green"}}>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-green-400 items-center">
                                <td className="px-12 border-b-2">{item["playerName"]}</td>
                                <td className="px-12 border-b-2">{item["score"]}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage;