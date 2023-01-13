import { Link, useLocation, useNavigate } from "react-router-dom";
function SaveName() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="mt-[90%] lg:mt-[20%] flex flex-col justify-center items-centers">
            <div className="flex items-center border-b border-teal-500 py-2 px-2">
                <input className="appearance-none bg-transparent border-none w-full text-white-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" required />           
                <button onClick={() => {navigate("/quiz")}} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-sm text-white py-1 px-2 rounded" type="button">
                    Commencer
                </button>      
            </div>
        </div>
    )
}

export default SaveName;