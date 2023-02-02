
import { useEffect, useState } from 'react';
import useValidation from '../../../hooks/useValidation';
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Input = ({
    iconName = "",
    type = 'text',
    placeholder = "",
    rule = "",
    value = "",
    onChange,
    disabled = false,
    attributes = {},
    haveError
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

    useEffect(() => {
        if (haveError === true) {
            setValidInput(false)
        } else if (haveError === false) {
            setValidInput(true)
        }
    }, [haveError])


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
            <div className={`flex items-center border border-captionLight h-10 rounded-md 
            ${disabled && 'opacity-60 bg-gray-50'}
            ${validInput ? 'bg-gray-100' : 'bg-white'}
            ${validInput === false ? 'border-danger' : ''}`}>
                <div className='w-10 min-w-[40px] h-full flex justify-center items-center'>
                    <LoadSvgIcon name={iconName} size="16" weight={1.5} color="var(--color-captionLight)" />
                </div>
                <div className='flex-grow h-full relative'>
                    <input
                        type={type}
                        value={inputValue}
                        onChange={e => onChangeHandler(e.target.value)}
                        onBlur={validHandler}
                        className="w-full h-full outline-none bg-transparent text-xxs text-body font-bold placeholder:text-captionLight placeholder:text-[11px] componentinput"
                        placeholder={placeholder}
                        disabled={disabled}
                        {...attributes}
                    />
                </div>
                {validInput === true && (
                    <div className="w-10 min-w-[40px] h-full flex items-center justify-center">
                        <span className=''>
                            <LoadSvgIcon name="check" size={18} weight={1.5} color="var(--color-primary)" />
                        </span>
                    </div>
                )}
                {validInput === false && (
                    <div className="w-10 min-w-[40px] h-full flex items-center justify-center">
                        <span className=''>
                            <LoadSvgIcon name="close-circle" size={18} weight={1.5} color="var(--color-danger)" />
                        </span>
                    </div>
                )}
            </div>
        </>
    );
};

export default Input;
