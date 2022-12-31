import { Route, Routes } from 'react-router-dom'
import SignupLogin from '../../pages/Signup-login'
import Splash from '../../pages/Splash'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../../pages/Home';
import RequestRegistration from '../../pages/Request-registration';
import Profile from '../../pages/Profile';
import Comments from '../../pages/Comments';
import AddComment from '../../pages/AddComment';
import About from '../../pages/About';

const Layout = () => {
    return (
        <div className='max-w-md h-full bg-light mx-auto shadow-xl'>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} >
                    <Route index element={<RequestRegistration />} />
                    <Route path="profile/:userId" element={<Profile />} />
                    <Route path="comments" element={<Comments />} />
                    <Route path="add-comment/:userId" element={<AddComment />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="/signup-login" element={<SignupLogin />} />
            </Routes>

            <ToastContainer
                position="top-center"
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