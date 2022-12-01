import { Outlet } from 'react-router-dom'
import Header from '../containers/header/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Home