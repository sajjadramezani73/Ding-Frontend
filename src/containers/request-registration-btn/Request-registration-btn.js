import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { sentRequest } from '../../services/queries';
import { toast } from 'react-toastify';
import LoadSvgIcon from '../../utils/LoadSvgIcon';

const RequestRegistrationBtn = () => {

    // const btnRef = useRef()
    // console.log(btnRef)

    // const [startX, setStartX] = useState(0);

    // const mouseDownHandler = (e) => {

    //     console.log(e.target);

    //     document.addEventListener("mousemove", mouseMove)
    //     document.addEventListener('mouseup', function () {
    //         btnRef.current.style.left = 0
    //         document.removeEventListener('mousemove', mouseMove);
    //     });
    // }

    // const mouseMove = (e) => {
    //     console.log('clientX', e.clientX, 'offsetX', e.offsetX, 'pageX', e.pageX, 'screenX', e.screenX);
    //     console.log(btnRef.current.getBoundingClientRect().left - e.clientX)
    //     let newX = btnRef.current.getBoundingClientRect().left - e.clientX

    //     if (getComputedStyle(btnRef.current).right <= 0 + 'px' || getComputedStyle(btnRef.current).left < 0 + 'px') {

    //     } else {
    //         btnRef.current.style.left = btnRef.current.offsetLeft - (newX) + 'px'
    //     }
    //     // console.log('getComputedStyle(btnRef.current).right', getComputedStyle(btnRef.current).right)
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
                    // onTouchStart={mouseDownHandler}
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