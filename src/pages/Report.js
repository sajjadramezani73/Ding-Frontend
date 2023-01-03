import { useState } from 'react'
import Button from '../components/ui/button/Button'
import FullModal from '../components/modals/FullModal';
import LoadSvgIcon from '../utils/LoadSvgIcon';
import DatePicker from '../components/datePicker/DatePicker';

const Report = () => {

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        month: null,
        year: null
    });

    console.log('selectedDate', selectedDate);

    const closeDatePickerModal = () => {
        setSelectedDate({ month: null, year: null })
        setShowDatePicker(false)
    }

    return (
        <>
            <div className='h-full p-4 flex flex-col justify-between'>
                <div className="pt-4">
                    <p className='text-sm text-titr'>تاریخ مورد نظر خود را انتخاب کنید.</p>
                    <div className="flex justify-center pt-8">
                        <Button
                            title={selectedDate.month !== null ? `${selectedDate.month.text} / ${selectedDate.year}` : "ماه / سال"}
                            className="w-1/2"
                            onClick={() => setShowDatePicker(true)}
                        />
                    </div>
                </div>
                <div className="p-4 bg-red-300">
                </div>
            </div>

            <FullModal
                options={{
                    show: showDatePicker,
                    setShow: () => setShowDatePicker(false),
                }}
            >
                <div className="min-h-[170px] bg-white overflow-hidden">
                    <div className="flex justify-between items-center bg-primary px-2">
                        <span className='px-2 py-2 cursor-pointer' onClick={() => setShowDatePicker(false)}>
                            <LoadSvgIcon name="check" color="#ffffff" weight={1.5} />
                        </span>
                        <span className='px-2 py-2 cursor-pointer' onClick={closeDatePickerModal}>
                            <LoadSvgIcon name="close" color="#ffffff" weight={1.5} />
                        </span>
                    </div>
                    <div className="">
                        <DatePicker
                            selectDate={value => setSelectedDate(value)}
                        />
                    </div>
                </div>
            </FullModal>
        </>
    )
}

export default Report