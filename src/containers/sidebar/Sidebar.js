import React from 'react'
import ModalRoot from '../../components/modals/Modal-root'

const Sidebar = ({ show, setShow }) => {
    return (
        <ModalRoot>
            <div className={`fixed top-0 left-1/2 w-full max-w-md h-full bg-black/[0.5] backdrop-blur-sm -translate-x-1/2 overflow-hidden overlay ${show && 'active'}`}
                onClick={(e) => (e.target === e.currentTarget && setShow(false))}>
                <div className={`bg-white h-full w-4/5 max-w-[320px] translate-x-full sidebar ${show && 'active'}`}></div>
            </div>
        </ModalRoot>
    )
}

export default Sidebar