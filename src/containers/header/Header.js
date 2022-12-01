import LoadSvgIcon from '../../utils/LoadSvgIcon'

const Header = () => {
    return (
        <div className='h-14 bg-primary grid grid-cols-3 items-center px-4'>
            <span>
                <LoadSvgIcon name="hamberger" color="#ffffff" weight={1.5} />
            </span>
            <p className='text-white text-tiny'>ثبت ورود و خروج</p>
        </div>
    )
}

export default Header