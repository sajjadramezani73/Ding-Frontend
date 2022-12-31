import useCurrentTime from '../../hooks/useCurrentTime';

const Time = () => {

    const { time } = useCurrentTime()

    return (
        <div className='flex flex-col items-center'>
            <span className="flex items-center text-base text-titr font-bold">
                <p>{time?.minute}</p>
                <p className='px-0.5'>:</p>
                <p>{time?.hour}</p>
            </span>
            <span className="flex items-center text-sm text-caption">
                <p>{time?.dayWeek}</p>
                <p>،</p>
                <p className='px-1'>{time?.day}</p>
                <p>{time?.month}</p>
            </span>
        </div>
    )
}

export default Time