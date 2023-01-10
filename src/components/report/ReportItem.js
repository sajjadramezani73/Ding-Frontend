import moment from 'jalali-moment';

const ReportItem = ({ item }) => {

    console.log(item);

    // convert date to text day
    const changeDateToDay = (date) => {
        let m = moment.from(date, 'fa', 'YYYY/MM/DD')
        return m.locale('fa').format('dddd')
    }

    // convert number month to text month
    const changeDateToTextMonth = (date) => {
        let m = moment.from(date, 'fa', 'YYYY/MM/DD')
        return m.locale('fa').format('D MMMM YYYY')
    }

    // remove second from time
    const RemoveSecondFromTime = (time) => {
        if (time) {
            let m = moment.from(time, 'fa', 'HH:mm:ss')
            return m.locale('fa').format('HH:mm')
        } else {
            return '----'
        }
    }

    return (
        <div className='bg-light rounded-md border border-primary/50 mb-1 flex items-stretch'>
            <div className="w-28 border-l border-primary text-xxs text-captionDark flex flex-col justify-center items-center py-3">
                <p className='mb-0.5'>{changeDateToDay(item?.date)}</p>
                <p className=''>{changeDateToTextMonth(item?.date)}</p>
            </div>
            <div className="flex-grow flex justify-between items-center px-3">
                <div className="flex flex-col py-1">
                    {item?.entryAndExit?.map(item => {
                        return <div className='flex text-xxs text-captionDark'>
                            <p className='w-[30px] text-center'>{RemoveSecondFromTime(item?.enter?.time)}</p>
                            <p className='px-1'>تا</p>
                            <p className='w-[30px] text-center'>{RemoveSecondFromTime(item?.exit?.time)}</p>
                        </div>
                    })}
                </div>

                <div className='text-xxs text-captionDark text-center'>
                    <p className='mb-0.5'>جمع کل</p>
                    <p>07:18</p>
                </div>
            </div>
        </div>
    )
}

export default ReportItem