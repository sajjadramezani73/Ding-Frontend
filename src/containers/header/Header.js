import { useState } from 'react';
import LoadSvgIcon from '../../utils/LoadSvgIcon'
import Sidebar from '../sidebar/Sidebar'

const Header = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='h-14 bg-primary grid grid-cols-3 items-center px-4'>
            <span onClick={() => setShowSidebar(true)}>
                <LoadSvgIcon name="hamberger" color="#ffffff" weight={1.5} />
            </span>
            <p className='text-white text-tiny'>ثبت ورود و خروج</p>

            <Sidebar show={showSidebar} setShow={setShowSidebar} />
        </div>
    )
}

export default Header