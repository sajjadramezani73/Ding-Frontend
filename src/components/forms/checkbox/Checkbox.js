import LoadIconSvg from '../../../utils/LoadSvgIcon'

const Checkbox = ({ title, checked, onClick }) => {
    return (
        <div className='flex items-center cursor-pointer' onClick={onClick}>
            <span className={`flex justify-center items-center w-4 h-4 border rounded 
            ${checked ? 'bg-primary border-primary' : 'border-captionLight'}`}>
                {checked ? <LoadIconSvg name='check' color='#fff' weight={1.5} size={13} /> : null}
            </span>
            <p className={`mr-1.5 text-sm ${checked ? 'text-gray-600': 'text-gray-400'}`}>{title}</p>
        </div>
    )
}

export default Checkbox