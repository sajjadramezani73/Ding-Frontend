import React, { useState } from 'react'
import { useEffect } from 'react'
import useValidation from '../../../hooks/useValidation'
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Textarea = ({
    iconName = "",
    placeholder = "",
    rule = "",
    value = "",
    onChange,
    disabled = false,
    attributes = {},
}) => {

    const { validate } = useValidation()

    const [inputValue, setInputValue] = useState('')
    const [validInput, setValidInput] = useState(null);

    useEffect(() => {
        setInputValue(value)
    }, [value])

    useEffect(() => {
        inputValue === '' && setValidInput(null)
    }, [inputValue])


    const onChangeHandler = (val) => {
        onChange({
            target: {
                value: val
            }
        })
    }

    const validHandler = () => {
        const valid = validate({ rule: rule, value: inputValue })
        setValidInput(valid.isValid)
    }

    return (
        <>
            <div className={`flex border border-captionLight rounded-md pt-2
            ${disabled && 'opacity-60 bg-gray-50'}
            ${validInput ? 'bg-gray-100' : 'bg-white'}`}>
                <div className='w-10 min-w-[40px] h-full flex justify-center items-center'>
                    <LoadSvgIcon name={iconName} size="16" weight={1.5} color="var(--color-captionLight)" />
                </div>
                <div className={`flex-grow h-full relative ${validInput ? '' : 'pl-3'}`}>
                    <textarea
                        value={inputValue}
                        onChange={e => onChangeHandler(e.target.value)}
                        onBlur={validHandler}
                        className="w-full h-full outline-none resize-none bg-transparent text-xxs text-body font-bold placeholder:text-captionLight placeholder:text-[11px] componentinput"
                        placeholder={placeholder}
                        disabled={disabled}
                        {...attributes}
                    ></textarea>
                </div>
                {validInput && (
                    <div className="w-10 min-w-[40px] h-full flex items-center justify-center">
                        <span className=''>
                            <LoadSvgIcon name="check" size={18} weight={1.5} color="var(--color-primary)" />
                        </span>
                    </div>
                )}
            </div>
        </>
    )
}

export default Textarea