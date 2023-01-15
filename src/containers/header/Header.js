import { useEffect, useState } from 'react';
import LoadSvgIcon from '../../utils/LoadSvgIcon'
import Sidebar from '../sidebar/Sidebar'
import { useLocation, useSearchParams } from 'react-router-dom'

const Header = () => {

    let location = useLocation();
    let [searchParams] = useSearchParams();

    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        showSidebar === true && setShowSidebar(false)
    }, [location.pathname])


    return (
        <div className='h-14 min-h-[56px] bg-primary grid grid-cols-7 items-center px-4'>
            <span className='cursor-pointer' onClick={() => setShowSidebar(true)}>
                <LoadSvgIcon name="hamberger" color="#ffffff" weight={1.5} />
            </span>
            <p className='text-white text-tiny col-span-5 text-center'>{searchParams.get('title')}</p>

            <Sidebar show={showSidebar} setShow={setShowSidebar} />
        </div>
    )
}

export default Header