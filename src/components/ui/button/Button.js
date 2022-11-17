import React from 'react'
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Button = ({ title, width = '', onClick, loading, disabled, className }) => {
    return (
        <button
            className={`font-bold text-xxs rounded-3xl h-10 flex items-center justify-center bg-primary text-white
            ${(loading || disabled ) && 'bg-primary/[0.7]'}
            ${width}
            ${className}`}
            disabled={loading || disabled}
            onClick={onClick}
        >
            {loading ? <LoadSvgIcon name="loading" fill='#ffffff' color="#ffffff" /> : title}
        </button >
    )
}

export default Button