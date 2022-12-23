import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import LoadSvgIcon from '../../utils/LoadSvgIcon';
import { sentRequest } from '../../services/queries';
import { toast } from 'react-toastify';

const RequestRegistrationBtn = () => {

    // const btnRef = useRef()

    // const [startX, setStartX] = useState(0);

    // const mouseDownHandler = (e) => {

    //     document.addEventListener("mousemove", mouseMove)
    //     document.addEventListener('mouseup', function () {
    //         btnRef.current.style.left = 0
    //         document.removeEventListener('mousemove', mouseMove);
    //     });
    // }

    // const mouseMove = (e) => {
    //     let newX = btnRef.current.getBoundingClientRect().left - e.clientX

    //     if (getComputedStyle(btnRef.current).right <= 0 + 'px' || getComputedStyle(btnRef.current).left < 0 + 'px') {

    //     } else {
    //         btnRef.current.style.left = btnRef.current.offsetLeft - (newX) + 'px'
    //     }
    //     console.log('getComputedStyle(btnRef.current).right', getComputedStyle(btnRef.current).right)
    // }

    const { user } = useSelector(store => store.user);
    const { map } = useSelector(store => store.map);
    console.log(user)
    console.log(map)

    const sendRequestHandler = (mode) => {
        console.log(mode)
        sentRequest({ creator: user?._id, mode: mode, ...map })
            .then(res => {
                console.log(res);
                toast.success(res?.message)
            }).catch(err => {
                console.log(err?.response?.data)
                toast.error(err?.response?.data?.message ? err?.response?.data?.message : 'متاسفانه خطایی رخ داده است!')
            })
    }

    return (
        <>
            <div className="h-10 bg-captionLight rounded-full flex justify-end mb-2 relative" >
                <button
                    className="flex items-center text-sm bg-primary text-white rounded-full h-full px-4 absolute"
                    // onMouseDown={mouseDownHandler}
                    // ref={btnRef}
                    onClick={() => sendRequestHandler('enter')}
                >
                    <LoadSvgIcon name="chevronRight" size={20} weight={1.5} color="#FFFFFF" />
                    ورود
                </button>
            </div>
            <div className="h-10 bg-captionLight rounded-full flex">
                <button className="flex items-center text-sm bg-primary text-white rounded-full h-full px-4"
                    onClick={() => sendRequestHandler('exit')}
                >
                    خروج
                    <LoadSvgIcon name="chevronLeft" size={20} weight={1.5} color="#FFFFFF" />
                </button>
            </div>
        </>
    )
}

export default RequestRegistrationBtn