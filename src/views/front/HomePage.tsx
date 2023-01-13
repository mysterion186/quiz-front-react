import { Outlet } from 'react-router-dom';


function HomePage() {
    return (
        <div className='flex justify-center flex-col items-center'>
            <Outlet />
        </div>
    )
}

export default HomePage;