import LoadSvgIcon from "../../utils/LoadSvgIcon"
import ModalRoot from "./Modal-root"

const FullModal = ({ children, options }) => {

    const { show, setShow, title } = options

    return (
        <>
            {show && (
                <ModalRoot show={show} onClick={value => setShow(value)}>
                    <div className={`full-modal w-full h-full overflow-hidden ${show ? 'active' : ''}`}>
                        <div className="h-full bg-white flex flex-col">
                            <div className="h-14 min-h-[56px] shadow-bottom flex justify-between items-center px-4">
                                <p className="text-sm text-captionDark">{title}</p>
                                <span className="cursor-pointer" onClick={() => setShow(false)}>
                                    <LoadSvgIcon name="close" weight={1.5} />
                                </span>
                            </div>
                            <div className="flex-grow p-4 overflow-hidden">
                                {children}
                            </div>
                        </div>
                    </div>
                </ModalRoot>
            )}
        </>
    )
}

export default FullModal
