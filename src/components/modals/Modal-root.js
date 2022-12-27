import { createPortal } from 'react-dom';

const ModalRoot = ({ children, show, onClick }) => {
    return createPortal((
        <div
            className={`fixed top-0 left-1/2 z-10 w-full max-w-md h-full bg-black/[0.5] backdrop-blur-sm -translate-x-1/2 overflow-hidden duration-200
            ${show ? 'opacity-100 visible ' : 'opacity-0 invisible delay-300'}`}
            onClick={(e) => (e.target === e.currentTarget && onClick(false))}
        >
            {children}
        </div>
    ), document.querySelector("#modal-root"));
}

export default ModalRoot