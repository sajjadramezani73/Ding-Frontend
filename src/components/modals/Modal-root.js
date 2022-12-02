import { createPortal } from 'react-dom';

const ModalRoot = ({ children }) => {
    return createPortal(children, document.querySelector("#modal-root"));
}

export default ModalRoot