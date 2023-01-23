import { useState } from 'react'
import { useSelector } from 'react-redux';
import { sentRequest } from '../../services/queries';
import LoadSvgIcon from '../../utils/LoadSvgIcon';
import ConfirmModal from '../../components/modals/ConfirmModal';
import Button from '../../components/ui/button/Button';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

const RequestRegistrationBtn = ({ mode }) => {

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

    const sendRequestHandler = (requestMode) => {
        if (mode === 'device') {
            setResultModal(true)
            setResult({
                success: 0,
                message: 'به دلیل عدم وجود دستگاه، این بخش غیر فعال می باشد'
            })
        } else {
            setLoading(true)
            setResultModal(true)
            sentRequest({ creator: user?._id, mode: requestMode, ...map })
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

    }

    return (
        <>
            <SwipeableList>
                <div className="swipeRight mb-2">
                    <SwipeableListItem
                        swipeRight={{
                            content: <div className="basic-swipeable-list__item-content"></div>,
                            action: () => sendRequestHandler('enter')
                        }}
                        swipeStartThreshold={0}
                    >
                        <div className='flex justify-center items-center text-sm bg-primary text-white rounded-full w-[80px] h-full cursor-pointer -translate-x-px select-none'>
                            <LoadSvgIcon name="chevronRight" size={20} weight={1.5} color="#FFFFFF" />
                            ورود
                        </div>
                    </SwipeableListItem>
                </div>
                <div className="swipeLeft">
                    <SwipeableListItem
                        swipeLeft={{
                            content: <div className="basic-swipeable-list__item-content"></div>,
                            action: () => sendRequestHandler('exit')
                        }}
                        swipeStartThreshold={0}
                    >
                        <div className='flex justify-center items-center text-sm bg-primary text-white rounded-full w-[80px] h-full cursor-pointer translate-x-px select-none'>
                            خروج
                            <LoadSvgIcon name="chevronLeft" size={20} weight={1.5} color="#FFFFFF" />
                        </div>
                    </SwipeableListItem>
                </div>
            </SwipeableList>

            <ConfirmModal
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
                            <p className='text-sm text-captionDark text-center py-4'>{result?.message}</p>
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
            </ConfirmModal>
        </>
    )
}

export default RequestRegistrationBtn