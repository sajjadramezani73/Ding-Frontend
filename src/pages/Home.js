import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../containers/header/Header'
import { getIndex } from '../services/queries'
import { addUser } from '../store/userSlice'

const Home = () => {

    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user == null) {
            getIndex()
                .then(res => {
                    res.user !== null ? dispatch(addUser(res.user)) : dispatch(addUser(null))
                    res.userValid !== true && navigate('/signup-login')
                })
                .catch(err => {
                    navigate('/signup-login')
                })
        }
    }, [])

    return (
        <div className='h-full flex flex-col'>
            <Header />
            <div className="flex-grow overflow-hidden">
                <Outlet />
            </div>
        </div>
    )
}

export default Home