import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { sentRequest } from '../../services/queries';
import LoadSvgIcon from '../../utils/LoadSvgIcon';
import FullModal from '../../components/modals/FullModal';
import Button from '../../components/ui/button/Button';

const RequestRegistrationBtn = ({ mode }) => {

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

    const [resultModal, setResultModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState({
        success: null,
        message: ''
    });

    const sendRequestHandler = (mode) => {
        setLoading(true)
        setResultModal(true)
        sentRequest({ creator: user?._id, mode: mode, ...map })
            .then(res => {
                setResult({
                    success: res?.success,
                    message: res?.message
                })
                setLoading(false)
            }).catch(err => {
                setResult({
                    success: err?.response?.data?.success,
                    message: err?.response?.data?.message ? err?.response?.data?.message : 'متاسفانه خطایی رخ داده است!'
                })
                setLoading(false)
            })
    }

    return (
        <>
            <div className="h-10 bg-captionLight rounded-full flex justify-end mb-2 relative" disabled={true}>
                <button
                    className="flex items-center text-sm bg-primary text-white rounded-full h-full px-4 absolute"
                    // onMouseDown={mouseDownHandler}
                    // onTouchStart={mouseDownHandler}
                    // ref={btnRef}
                    disabled={mode === 'device'}
                    onClick={() => sendRequestHandler('enter')}
                >
                    <LoadSvgIcon name="chevronRight" size={20} weight={1.5} color="#FFFFFF" />
                    ورود
                </button>
            </div>
            <div className="h-10 bg-captionLight rounded-full flex">
                <button className="flex items-center text-sm bg-primary text-white rounded-full h-full px-4"
                    disabled={mode === 'device'}
                    onClick={() => sendRequestHandler('exit')}
                >
                    خروج
                    <LoadSvgIcon name="chevronLeft" size={20} weight={1.5} color="#FFFFFF" />
                </button>
            </div>

            <FullModal
                options={{
                    show: resultModal,
                    setShow: () => setResultModal(false),
                }}
            >

                <div className="p-5 min-h-[164px] bg-white flex justify-center items-center">
                    {loading ? (
                        <LoadSvgIcon name="loading" fill="var(--color-caption)" />
                    ) : (
                        <div className="flex flex-col items-center">
                            {result?.success === 1 ? (
                                <LoadSvgIcon name="resultSuccess" color="var(--color-greenCu)" size={35} />
                            ) : (
                                <LoadSvgIcon name="resultDanger" color="var(--color-danger)" size={35} />
                            )}
                            <p className='text-sm text-captionDark py-4'>{result?.message}</p>
                            <div className="">
                                <Button
                                    title="متوجه شدم"
                                    className="h-9 text-xxs px-3"
                                    onClick={() => setResultModal(false)}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </FullModal>
        </>
    )
}

export default RequestRegistrationBtn