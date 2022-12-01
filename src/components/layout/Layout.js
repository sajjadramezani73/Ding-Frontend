import { Route, Routes } from 'react-router-dom'
import SignupLogin from '../../pages/Signup-login'
import Splash from '../../pages/Splash'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../../pages/Home';
import RequestRegistration from '../../pages/Request-registration';

const Layout = () => {
    return (
        <div className='max-w-md h-full bg-light mx-auto shadow-xl'>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} >
                    <Route index element={<RequestRegistration />} />
                </Route>
                <Route path="/signup-login" element={<SignupLogin />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div>
    )
}

export default Layout