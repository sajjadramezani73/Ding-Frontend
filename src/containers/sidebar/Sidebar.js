import ModalRoot from '../../components/modals/Modal-root'
import SidebarLinks from './components/SidebarLinks'
import { useSelector } from 'react-redux';
import { baseUrl } from '../../constant';
import manAvatar from '../../assets/images/man.svg';
import womanAvatar from '../../assets/images/woman.svg'

const Sidebar = ({ show, setShow }) => {

    const { user } = useSelector(store => store.user);
    console.log(user)

    const avatar = (user) => {
        if (user?.avatar !== '') {
            return baseUrl + '/' + user?.avatar
        } else {
            return user?.gender === "male" ? manAvatar : womanAvatar
        }
    }

    return (
        <ModalRoot>
            <div className={`fixed top-0 left-1/2 w-full max-w-md h-full bg-black/[0.5] backdrop-blur-sm -translate-x-1/2 overflow-hidden duration-200 overlay 
            ${show ? 'opacity-100 visible' : 'opacity-0 invisible delay-300'}`}
                onClick={(e) => (e.target === e.currentTarget && setShow(false))}>
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
                                <button className='w-full h-10 rounded-lg bg-primary text-white text-sm'>خروج</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ModalRoot>
    )
}

export default Sidebar