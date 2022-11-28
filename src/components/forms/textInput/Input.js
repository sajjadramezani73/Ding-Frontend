
import { useEffect, useState } from 'react';
import LoadSvgIcon from '../../../utils/LoadSvgIcon'

const Input = ({
    iconName = "",
    type = 'text',
    placeholder = "",
    rule = "",
    value = "",
    onChange,
    attributes = {},
}) => {

    const [focused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        setInputValue(value)
    }, [value])

    const onChangeHandler = (val) => {
        onChange({
            target: {
                value: val
            }
        })
    }

    return (
        <>
            <div className={`flex items-center border border-captionLight h-10 rounded-md bg-white`}>
                <div className='w-10 h-full flex justify-center items-center'>
                    <LoadSvgIcon name={iconName} size="16" weight={1.5} color="var(--color-captionLight)" />
                </div>
                <div className='flex-grow h-full relative'>
                    <input
                        type={type}
                        value={inputValue}
                        onChange={e => onChangeHandler(e.target.value)}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className="w-full h-full outline-none bg-transparent text-xxs text-body font-bold placeholder:text-captionLight placeholder:text-[11px] componentinput"
                        placeholder={placeholder}
                        {...attributes} />
                </div>
                <div className="w-10 min-w-[40px] h-full flex items-center justify-center">
                    <span className=''>
                        <LoadSvgIcon name="check" size={18} weight={1.5} color="var(--color-primary)" />
                    </span>
                </div>
            </div>
        </>
    );
};

export default Input;
