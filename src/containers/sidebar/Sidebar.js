import ModalRoot from '../../components/modals/Modal-root'
import logo from '../../assets/images/logo.png'
import SidebarLinks from './components/SidebarLinks'

const Sidebar = ({ show, setShow }) => {
    return (
        <ModalRoot>
            <div className={`fixed top-0 left-1/2 w-full max-w-md h-full bg-black/[0.5] backdrop-blur-sm -translate-x-1/2 overflow-hidden duration-200 overlay 
            ${show ? 'opacity-100 visible' : 'opacity-0 invisible delay-300'}`}
                onClick={(e) => (e.target === e.currentTarget && setShow(false))}>
                <div className={`bg-white h-full w-4/5 max-w-[320px]  duration-300 sidebar 
                ${show ? 'translate-x-0 delay-200' : 'translate-x-full'}`}>
                    <div className="h-full">
                        <div className="h-28 bg-primary flex flex-col justify-center items-center">
                            <img src={logo} alt="logo" className='w-28' />
                            <p className='text-xl font-bold text-white'>Ding</p>
                        </div>
                        <div className="p-4">
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