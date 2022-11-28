import React from 'react'
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Button = ({ title, onClick, loading, disabled, className }) => {
    return (
        <button
            className={`font-bold text-xxs rounded-md h-10 flex items-center justify-center bg-primary text-white
            ${className}`}
            disabled={loading || disabled}
            onClick={onClick}
        >
            {loading ? <LoadSvgIcon name="loading" fill='#ffffff' size={20} color="#ffffff" /> : title}
        </button >
    )
}

export default Button