import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { sentRequest } from '../../services/queries';
import { toast } from 'react-toastify';
import ReactSwipeButton from 'react-swipe-button';

const RequestRegistrationBtn = () => {

    const swipeButtonEnter = useRef()
    const swipeButtonExit = useRef()

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
                swipeButtonEnter.current.reset()
                swipeButtonExit.current.reset()
            }).catch(err => {
                console.log(err?.response?.data)
                toast.error(err?.response?.data?.message ? err?.response?.data?.message : 'متاسفانه خطایی رخ داده است!')
                swipeButtonEnter.current.reset()
                swipeButtonExit.current.reset()
            })
    }

    return (
        <>
            <div className="mb-2">
                <ReactSwipeButton
                    text='ورود'
                    color='var(--color-primary)'
                    onSuccess={() => sendRequestHandler('enter')}
                    ref={swipeButtonEnter}
                />
            </div>
            <div className="">
                <ReactSwipeButton
                    text='خروج'
                    color='var(--color-primary)'
                    onSuccess={() => sendRequestHandler('exit')}
                    ref={swipeButtonExit}
                />
            </div>
        </>
    )
}

export default RequestRegistrationBtn