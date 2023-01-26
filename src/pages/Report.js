import { useState } from 'react'
import Button from '../components/ui/button/Button'
import ConfirmModal from '../components/modals/ConfirmModal';
import LoadSvgIcon from '../utils/LoadSvgIcon';
import DatePicker from '../components/datePicker/DatePicker';
import FullModal from '../components/modals/FullModal';
import { useSelector } from 'react-redux';
import { getReports } from '../services/queries';
import DetailedReports from '../containers/reports/DetailedReports';
import SummaryReports from '../containers/reports/SummaryReports';
import { toast } from 'react-toastify';

const Report = () => {

    const { user } = useSelector(store => store.user);

    const [loading, setLoading] = useState(false);
    const [reports, setReports] = useState(null);
    const [summaryReportModal, setSummaryReportModal] = useState(false);
    const [detailedReportModal, setDetailedReportModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState({
        month: null,
        year: null
    });

    const closeDatePickerModal = () => {
        setSelectedDate({ month: null, year: null })
        setShowDatePicker(false)
    }

    const getReportsHandler = (mode) => { // mode == summary-report or detailed-report
        setLoading(true)
        const params = {
            creator: user?._id,
            date: `${selectedDate.year}/${selectedDate.month.value}`,
            mode: mode
        }

        getReports(params)
            .then(res => {
                setLoading(false)
                setReports(res?.reports)
            }).catch(err => {
                setLoading(false)
            })
    }

    const openModalHandler = (mode) => {
        if (selectedDate.month == null || selectedDate.year == null) {
            toast.warning('لصفا ماه و سال مورد نظر خود را انتخاب کنید')
        } else if (mode === 'detailed-report') {
            setDetailedReportModal(true)
            setTitleModal('گزارش تفصیلی')
            getReportsHandler('detailed-report')

        } else if (mode === 'summary-report') {
            setSummaryReportModal(true)
            setTitleModal('گزارش خلاصه')
            getReportsHandler('summary-report')
        }
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
                        onClick={() => openModalHandler('summary-report')}
                    />
                    <Button
                        title="گزارش تفصیلی"
                        outline={true}
                        onClick={() => openModalHandler('detailed-report')}
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
                    {summaryReportModal && <SummaryReports reports={reports} loading={loading} />}
                    {detailedReportModal && <DetailedReports reports={reports} loading={loading} />}
                </div>
            </FullModal>
        </>
    )
}

export default Report