import ModalRoot from "./Modal-root"

const FullModal = ({ children, options }) => {
    const {
        show,
        setShow,
    } = options

    return (
        <>
            <ModalRoot show={show} onClick={value => setShow(value)}>
                <div
                    className='flex justify-center items-center w-full h-full'
                    onClick={(e) => e.target === e.currentTarget ? setShow(false) : null}
                >
                    <div
                        className={`confirm-pan w-full max-w-xs rounded-lg overflow-hidden ${show ? 'active' : ''}`}
                    >
                        {children}
                    </div>
                </div>

                <style jsx>
                    {`
                            @keyframes active {
                                0 % {
                                transform: scale(0);
                                }

                                100% {
                                transform: scale(1);
                                }
                            }
                            @keyframes deactive {
                                0 % {
                                    transform: translateY(100 %);
                                }

                                100% {
                                    transform: translateY(0%);
                                }
                            .confirm-pan {
                                transition-delay: 2s;
                                transform: scale(0);
                                transition: all ease 0.4s;
                                animation: deactive 0.3s linear 0.1s 1 normal forwards;
                            }
                            .confirm-pan.active {
                                animation: active 0.3s linear 0.1s 1 normal forwards;
                            }
                    
                        `}
                </style>
            </ModalRoot>
        </>
    )
}

export default FullModal
