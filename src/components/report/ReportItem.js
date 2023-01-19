import {
    changeDateToDay,
    changeDateToTextMonth,
    removeSecondFromTimeWithEmptyString
} from '../../utils/DateFanctions';

const ReportItem = ({ item }) => {

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
                            <p className='w-[30px] text-center'>{removeSecondFromTimeWithEmptyString(item?.enter?.time)}</p>
                            <p className='px-1'>تا</p>
                            <p className='w-[30px] text-center'>{removeSecondFromTimeWithEmptyString(item?.exit?.time)}</p>
                        </div>
                    })}
                </div>

                <div className='text-xxs text-captionDark text-center'>
                    <p className='mb-0.5'>جمع کل</p>
                    <p>{removeSecondFromTimeWithEmptyString(item?.totalTime)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportItem