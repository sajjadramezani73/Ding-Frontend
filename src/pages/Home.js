import { Outlet } from 'react-router-dom'
import Header from '../containers/header/Header'

const Home = () => {
    return (
        <div className='h-full flex flex-col'>
            <Header />
            <div className="flex-grow">
                <Outlet />
            </div>
        </div>
    )
}

export default Home