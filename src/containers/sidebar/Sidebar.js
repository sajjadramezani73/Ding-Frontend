import ModalRoot from '../../components/modals/Modal-root'
import SidebarLinks from './components/SidebarLinks'
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../constant';
import manAvatar from '../../assets/images/man.svg';
import womanAvatar from '../../assets/images/woman.svg'
import Button from '../../components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { addUser } from '../../store/userSlice';

const Sidebar = ({ show, setShow }) => {

    const { user } = useSelector(store => store.user);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const avatar = (user) => {
        if (user?.avatar !== '') {
            return baseUrl + '/' + user?.avatar
        } else {
            return user?.gender === "male" ? manAvatar : womanAvatar
        }
    }

    const logoutHandler = () => {
        navigate('/signup-login')
        Cookies.remove('token');
        dispatch(addUser(null));
    }

    return (
        <ModalRoot show={show} onClick={value => setShow(value)}>
            <div className={`bg-white h-full w-4/5 max-w-[320px]  duration-300 sidebar 
                ${show ? 'translate-x-0 delay-200' : 'translate-x-full'}`}>
                <div className="h-full">
                    <div className="bg-primary flex flex-col justify-center items-center py-4">
                        <img src={avatar(user)} alt="logo" className='w-20 h-20 rounded-full object-cover' />
                        <p className='text-tiny text-white mt-2'>{user?.firstName + ' ' + user?.lastName}</p>
                    </div>
                    <div className="p-4 pt-3">
                        <div className='border-b mb-4'>
                            <SidebarLinks />
                        </div>
                        <div className='px-10'>
                            <Button
                                title="خروج"
                                onClick={() => logoutHandler()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ModalRoot>
    )
}

export default Sidebar