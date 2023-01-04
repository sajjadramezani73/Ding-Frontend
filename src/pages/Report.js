import { useState } from 'react'
import Button from '../components/ui/button/Button'
import ConfirmModal from '../components/modals/ConfirmModal';
import LoadSvgIcon from '../utils/LoadSvgIcon';
import DatePicker from '../components/datePicker/DatePicker';
import FullModal from '../components/modals/FullModal';

const Report = () => {

    const [summaryReportModal, setSummaryReportModal] = useState(false);
    const [detailedReportModal, setDetailedReportModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
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
                <div className="grid grid-cols-2 gap-x-4">
                    <Button
                        title="گزارش خلاصه"
                        onClick={() => {
                            setSummaryReportModal(true)
                            setTitleModal('گزارش خلاصه')
                        }}
                    />
                    <Button
                        title="گزارش تفصیلی"
                        outline={true}
                        onClick={() => {
                            setDetailedReportModal(true)
                            setTitleModal('گزارش تفصیلی')
                        }}
                    />
                </div>
            </div>

            {/* modal for select date */}
            <ConfirmModal
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
            </ConfirmModal>

            {/* modal for show summary report or detailed report */}
            <FullModal
                options={{
                    title: titleModal,
                    show: summaryReportModal || detailedReportModal,
                    setShow: () => {
                        setSummaryReportModal(false)
                        setDetailedReportModal(false)
                    },
                }}
            >
                <div className="h-full overflow-hidden overflow-y-auto">
                    {summaryReportModal && <p>خلاصه گزارش</p>}
                    {detailedReportModal && <p>گزارش تفصیلی</p>}
                </div>
            </FullModal>
        </>
    )
}

export default Report