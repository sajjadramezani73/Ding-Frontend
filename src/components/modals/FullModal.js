import ModalRoot from "./Modal-root"

const FullModal = ({ children, options }) => {
    const { show, setShow } = options

    return (
        <>
            {show && (
                <ModalRoot show={show} onClick={value => setShow(value)}>
                    <div
                        className='flex justify-center items-center w-full h-full'
                    >
                        <div
                            className={`confirm-pan w-full max-w-xs rounded-lg overflow-hidden ${show ? 'active' : ''}`}
                        >
                            {children}
                        </div>
                    </div>
                </ModalRoot>
            )}
        </>
    )
}

export default FullModal
